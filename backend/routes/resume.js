import express from "express";
import Generate from "../controllers/resume.js";
import GetResume from "../controllers/getResume.js";
const router = express.Router();

router.post("/create", Generate);
router.get("/get/:id", GetResume);


export default router;