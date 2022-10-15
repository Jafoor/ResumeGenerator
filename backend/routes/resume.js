import express from "express";
import Generate from "../controllers/resume.js";
import GetResume from "../controllers/getResume.js";
import verifyToken from "../middlewire/auth.js";
const router = express.Router();

router.post("/create", verifyToken, Generate);
router.get("/get/:id",verifyToken, GetResume);


export default router;