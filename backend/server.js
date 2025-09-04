import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { signup, login } from "./controllers/authController.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.post("/api/auth/signup", signup);
app.post("/api/auth/login", login);


app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
