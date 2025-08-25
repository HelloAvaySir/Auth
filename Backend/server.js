import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/user.route.js";
import connectDB from "./config/database.js";
import cors from "cors";
import { verifyToken } from "./middleware/verify.token.js";
import authRoute from "./Routes/auth.route.js"
dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);
app.use("/api",authRoute)

app.listen(3000, () => {
  console.log("server is running");
});
app.get("/checktoken", verifyToken, () => {
  res.send("token varified");
});
app.get("/",(req,res)=>{
  res.send("I am from backend")
})
// mongodb+srv://Abhay:goldendawn@7@newcluster.1uo3zqd.mongodb.net/?retryWrites=true&w=majority&appName=NewCluster
