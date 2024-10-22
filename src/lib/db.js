import mongoose from "mongoose"

const connection = {}

export const connectToDb = async () => {
    try {
        if(connection.isConnected) { // reusing the existing connection
            console.log("Existing connection | Connected to DB");
            return;
        }

        const db = await mongoose.connect('mongodb+srv://harsh2005choudhari:SprrAHuvehKcxh6H@hackslashtest.phb5u.mongodb.net/?retryWrites=true&w=majority&appName=hackslashTest'); // this is hardcoded just for now | Will be changed later
        console.log("New connection | Connected to DB");
        connection.isConnected = db.connections[0].readyState;
        // console.log(connection);
        
        
    } catch (error) {
        console.log(error);
    }
}