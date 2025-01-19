import express from "express";
import  {checkout} from "../controlers/paymentControler.js"
const router = express.Router();

router.route("/checkout").post(checkout);

export default router;