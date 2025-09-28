import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";


import userRoutes from "./routes/user.js";


dotenv.config();


const app = express();


connectDB();


app.use(cors());           
app.use(express.json());    
app.use(express.urlencoded({ extended: true })); 

app.use("/api/users", userRoutes);  


app.get("/", (req, res) => {
  res.send(" API is running...");
});


app.use(errorHandler);

export default app;
