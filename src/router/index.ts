import usersRouter from "@/modules/users/users.router";
import { Router } from "express";

const router = Router();

router.use("/users", usersRouter);

export default router;
