"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = void 0;
const task_1 = __importDefault(require("../model/task"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        var backend = yield task_1.default.create(data);
        return res
            .status(200)
            .json({ message: "COngo Task added", data: backend });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createTask = createTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var backend = yield task_1.default.find({});
        return res.status(200).json({ data: backend });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getTask = getTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        var backend = yield task_1.default.findByIdAndUpdate(id, req.body, { new: true });
        return res
            .status(200)
            .json({ message: "Task updated", data: backend });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        var isDeleted = yield task_1.default.findByIdAndDelete(id);
        if (!isDeleted)
            throw new Error("Failed to delete Task");
        return res.status(200).json({ message: "Task deleted" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteTask = deleteTask;
