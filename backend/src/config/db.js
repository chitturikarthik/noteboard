import mongoose from "mongoose";

export const connectDB = async() => {
    try {
       await mongoose.connect(process.env.MONGO_URL);
       console.log("DB connected!");
    } catch (error) {
        console.log("Error connecting to DB: ", error.message);
        process.exit(1); //exit with failure
    }
}