import mongoose from "mongoose"

const connection = {}

export const connectToDb = async () => {
    try {
        if(connection.isConnected) { // reusing the existing connection
            console.log("Existing connection | Connected to DB");
            return;
        }

        const db = await mongoose.connect(process.env.MONGO_URL);
        console.log("New connection | Connected to DB");
        connection.isConnected = db.connections[0].readyState;
        // console.log(connection);
        
        
    } catch (error) {
        console.log(error);
    }
}