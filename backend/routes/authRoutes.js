import express from "express";
import { Signup, Login } from "../controllers/authController.js";

const router = express.Router();

router.post("/Signup", Signup);
router.post("/Login", Login);

export default router;
