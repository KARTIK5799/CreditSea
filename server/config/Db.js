import mongoose from "mongoose";
import config from "./config.js";

const connectDb =async()=>{
    try {
        const connection = await mongoose.connect(config.MONGO_URL,{
            dbName:"CreditSea"
        });
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.log(`MongoDb Connection Failed`,error);
        process.exit(1);
    }
}


export default connectDb;