import mongoose from "mongoose";

export const connectDB = async()=>{
     await mongoose.connect('mongodb+srv://shahashvi123:39313931@cluster0.nvpce2d.mongodb.net/food-del').then(()=>console.log("MongoDB connected"));
};