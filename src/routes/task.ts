import { Router } from "express";
import {
  createToDo,
  // getToDo,
  // updateToDo,
  // deleteToDo,
} from "../controller/task";

const router = Router();

router.post("/", createToDo);

router.get("/" );

router.patch("/:id");

router.delete("/:id");

export default router;