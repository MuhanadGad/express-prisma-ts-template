import { Router } from "express";
// import { asyncHandler } from '../../common/http/asyncHandler';
import * as controller from "./users.controller";

const router = Router();

router.get("/", controller.listUsers);
router.get("/:id", controller.getUser);
router.post("/", controller.createUser);
router.patch("/:id", controller.updateUser);

export default router;
