"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("../controller/task");
const router = (0, express_1.Router)();
router.post("/", task_1.createToDo);
// router.get("/", getToDo);
// router.patch("/:id", updateToDo);
// router.delete("/:id", deleteToDo);
exports.default = router;