import mongoose from "mongoose"

const connection = {}

export const connectToDb = async () => {
    try {
        if(connection.isConnected) { // reusing the existing connection
            console.log("Existing connection | Connected to DB");
            return;
        }

        const db = await mongoose.connect('mongodb://127.0.0.1:27017/hackslash'); // this is just for now, we will use altas in future
        console.log("New connection | Connected to DB");
        connection.isConnected = db.connections[0].readyState;
        console.log(connection);
        
        
    } catch (error) {
        console.log(error);
    }
}