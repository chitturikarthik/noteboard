import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "../src/config/db.js";
import rateLimiter_md from "./middlewares/rateLimiter_md.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}// this middleware will parse the JSON body : req.body

app.use(express.json());
//ratelimiter
app.use(rateLimiter_md);

//routes
app.use("/api/notes", notesRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
    });
});
