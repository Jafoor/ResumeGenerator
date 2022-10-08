import express from "express";
import Generate from "../controllers/resume.js";

const router = express.Router();

router.post("/create", Generate);


export default router;