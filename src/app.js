import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";





dotenv.config();


const app = express();


connectDB();


app.use(cors());           
app.use(express.json());    
app.use(express.urlencoded({ extended: true })); 

app.post('/api/users/register', (req, res) => {
  // console.log("req come at register endpoint");
  const data = req.body;
  console.log(data)
  res.status(200).json({ message: "Register endpoint hit successfully"});
});  

console.log("in app page")

app.get("/", (req, res) => {
  res.send(" API is running...");
});




export default app;
