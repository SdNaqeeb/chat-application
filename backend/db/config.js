import mongoose from "mongoose";

const connectToMongoDB =async (req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connected to MongoDB")

    } catch(error){
        console.log("Error connecting to MongoDB", error.message);
        res.status(500).json({message:"internal Server Error"})
    }
}

export default connectToMongoDB;