import express from "express";
import resumeRouters from "./routes/resume.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRouters);

app.listen(8800, () => {
  console.log("Connected!");
});
