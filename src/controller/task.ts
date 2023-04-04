import { RequestHandler } from "express";

import Todo, { TodoModel } from "../model/task";

export const createToDo: RequestHandler = async (req, res, next) => {
  try {
    const data: TodoModel = req.body;
    var backend = await Todo.create(data);
    return res
      .status(200)
      .json({ message: "Todo created successfully", data: backend  });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getToDo: RequestHandler = async (req, res, next) => {
  try {
    var backend = await Todo.find({});
    return res.status(200).json({ message: "All todos!", data: backend });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateToDo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    var backend = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    return res
      .status(200)
      .json({ message: "Todo updated successfully!", data: backend });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    var isDeleted = await Todo.findByIdAndDelete(id);
    if (!isDeleted) throw new Error("Failed to delete todo");
    return res.status(200).json({ message: "Todo deleted successfully!" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};