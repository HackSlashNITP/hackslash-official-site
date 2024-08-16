'use client'
import { logout } from '@/lib/actions';
import { UserContext } from '@/lib/userContext'
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

const UserState = () => {
    const { user, setUser } = useContext(UserContext);
    const router = useRouter();

    const submit = async () => {
        try {
            
            const resp = await logout();
            router.push('/login')
            localStorage.removeItem('user');
            setUser(null);
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div>
            {user ? (
                <div className='flex gap-2'>
                    <div className='font-bold text-green-500'>{user.username}</div>
                    <form action={submit}>
                        <button>Logout</button>
                    </form>
                </div>
            ) : (
                <div>Login</div>
            )
            }
        </div>
    )
}

export default UserState