import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB connected successfully");
  } catch (err) {
    console.error(" MongoDB connection failed", err);
    throw err; // re-throw to let app catch it
  }
};


// import mongoose from "mongoose";

// export const connectDB = async() => {
//     try{
//         await  mongoose.connect(`${process.env.MONGODB_URI}`);
//     }
//     catch(error){
//         console.log("Error" )
//         process.exit(1);
//     }
// }