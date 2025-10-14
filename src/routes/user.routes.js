import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router= Router()

router.route("/register").post(registerUser)//post for the route ex:- http://localhost:8000/users/register

export default router;