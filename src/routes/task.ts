import { Router } from "express";
import {createTask,getTask,updateTask,deleteTask,} from "../controller/task";

const router = Router();

router.get("/",getTask );

router.post("/", createTask);

router.patch("/:id",updateTask);

router.delete("/:id",deleteTask);

export default router;