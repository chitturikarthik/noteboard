import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "../src/config/db.js";
import rateLimiter_md from "./middlewares/rateLimiter_md.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());// this middleware will parse the JSON body : req.body

//cors
app.use(cors());

//ratelimiter
app.use(rateLimiter_md);

//routes
app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
    });
});
