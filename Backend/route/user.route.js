import express from "express";
import { signup, login, getUserRole } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/role/:email", getUserRole);

export default router;