import dotenv from "dotenv"; 
dotenv.config(); 
import { connectDB } from "./db/index.js"; // Now DB will see env
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at the port :$ {process.env.PORT}`);
    })
})
.catch((Error)=>
{
    console.log("MongoDB connection failed!!!",err);
})
