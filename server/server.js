import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import config from './config/config.js';
import connectDb from './config/Db.js';


const app = express();
connectDb();

app.use(cors());
app.use(express.json());

const PORT = config.PORT;




app.use((_,res)=>{
    res.status(400).json({error:"404 - Route not Found"})
})

app.listen(PORT,()=>{
    console.log(`Server is running this ${PORT}`);
})