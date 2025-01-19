import express from "express";
import { config } from "dotenv";
import router from "./routes/paymentRoutes.js";
import cors from "cors";

config({path:"./config/.env"})

export const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api",router);


