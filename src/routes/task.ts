import { Router } from "express";
import {
  createToDo,
  getToDo,
  updateToDo,
  deleteToDo,
} from "../controller/task";

const router = Router();

router.post("/", createToDo);

router.get("/",getToDo );

router.patch("/:id",updateToDo);

router.delete("/:id",deleteToDo);

export default router;