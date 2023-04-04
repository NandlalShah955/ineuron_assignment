import Task, { TaskModel } from "../model/task";

import { RequestHandler } from "express";

export const createTask: RequestHandler = async (req, res) => {
  try {
    const data: TaskModel = req.body;
    var backend = await Task.create(data);
    return res
      .status(200)
      .json({ message: "COngo Task added", data: backend  });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask: RequestHandler = async (req, res) => {
  try {
    var backend = await Task.find({});
    return res.status(200).json({data: backend });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    var backend = await Task.findByIdAndUpdate(id, req.body, { new: true });
    return res
      .status(200)
      .json({ message: "Task updated", data: backend });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    var isDeleted = await Task.findByIdAndDelete(id);
    if (!isDeleted) throw new Error("Failed to delete Task");
    return res.status(200).json({ message: "Task deleted" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};