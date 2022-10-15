import express from "express";
import resumeRouters from "./routes/resume.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import * as dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/resume", resumeRouters);
app.use("/api/auth", authRoutes);


app.listen(8080, () => {
  console.log("Connected!");
});
