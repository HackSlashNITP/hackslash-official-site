// we will be creating data fetching functions for SSR

import { connectToDb } from "./db"

export const example = async () => {
    try {
        await connectToDb();
        return "Hello world | 123"
    } catch (error) {
        console.log(error);
        return "Error occured"
    }
}