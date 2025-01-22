import mongoose from "mongoose";

const DBconnect= async()=>{

    const {connection}= await mongoose.connect(process.env.MONGO_URI);

    console.log(`Databse connected successfully with ${connection.host}`);
}

export default DBconnect;