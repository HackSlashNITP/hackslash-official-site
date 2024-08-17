'use server'
import { cookies } from 'next/headers'
import { connectToDb } from "./db";
import { Post, User } from "./models";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

// this file is for server actions

export const register = async (formData) => {
    try {
        const formInfo = Object.fromEntries(formData);
        // console.log(formInfo);

        // formInfo will contain username and password only

        await connectToDb()
        const existingUser = await User.findOne({
            username: formInfo.username

        })
        // console.log(existingUser);

        if (existingUser) {
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(formInfo.password, 10);
        // console.log(hashedPassword);

        const newUser = new User({
            ...formInfo,
            password: hashedPassword
        })

        // console.log(newUser._doc);

        await newUser.save();

        return {
            success: "New user registered | Login to continue"
        }


    } catch (error) {
        console.log(error);
        return {
            error: error.message || "Something went wrong | try again later"
        }

    }
}

export const login = async (formData) => {
    try {
        const cookieStore = cookies()
        const formInfo = Object.fromEntries(formData);
        // console.log(formInfo);


        await connectToDb();
        const existingUser = await User.findOne({
            username: formInfo.username
        });
        // console.log(existingUser);


        if (!existingUser) {
            throw new Error("Invalid Username or Password")
        }

        const isPasswordCorrect = await bcrypt.compare(formInfo.password, existingUser.password);
        if (!isPasswordCorrect) {
            throw new Error("Invalid Username or Password")
        }

        const token = jwt.sign({
            userId: existingUser._id
        }, process.env.JWT_SECRET, { expiresIn: '7d' });

        cookieStore.set('token', token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });

        const userObject = existingUser.toObject();
        delete userObject.password;

        return {
            success: "logged in",
            user: JSON.stringify(userObject)
        }
    } catch (error) {
        console.log(error);
        return {
            error: error.message || "Something went wrong | try again later"
        }
    }
}

export const logout = async () => {
    try {
        const cookieStore = cookies()
        cookieStore.delete('token');
        return {
            success : "Logged out !"
        }
    } catch (error) {
        console.log(error);
        return {
            error : error.message || "Something went wrong"
        }
    }
}

// for token verfication
export const verifyToken = async () => {
    try {
        const cookieStore = cookies();
        const token = cookieStore.get('token');
        
        if(!token?.value) {
            throw new Error("Not authorirzed")
        }

        return new Promise((resolve,reject) => {
            jwt.verify(token.value, process.env.JWT_SECRET, (err,payload) => {
                if(err) reject(err);
                // console.log(payload);
                
                resolve({
                    isVerified : true,
                    user : payload
                })
            })
        })

    } catch (error) {
        console.log(error);
        return {
            isVerified : false,
            user : null
        }
        
    }
}

export const createBlog = async (value,images, title) => {
    try {
    // console.log(value,images, title);
    const data = await verifyToken();
    if(!data.isVerified) {
        throw new Error("Not authorized")
    }

    await connectToDb();
    const newPost = new Post({
        title,
        desc : value,
        images,
        author : data.user.userId
    })

    await newPost.save();

    return {
        success : "Blog created successfully",
        url : "/blogs/" + newPost._id
    }
    
        
    } catch (error) {
        console.log(error);
        return {
            error : error.message || "Something went wrong"
        }
    }
}