import { Router } from "express";

import taskController from "../controllers/TaskController";

const router = Router();

router.get("/", taskController.findAll);
router.get("/:id", taskController.findOne);

export default router;
