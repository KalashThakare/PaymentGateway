import { app } from "./app.js";
import Razorpay from "razorpay";
import DBconnect from "./config/databse.js";

DBconnect();

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig on ${process.env.PORT}`)
})