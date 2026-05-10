import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "../src/config/db.js";

dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
})