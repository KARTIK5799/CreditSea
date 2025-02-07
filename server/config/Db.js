import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb =async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            dbName:"CreditSea"
        });
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.log(`MongoDb Connection Failed`,error);
        process.exit(1);
    }
}


export default connectDb;