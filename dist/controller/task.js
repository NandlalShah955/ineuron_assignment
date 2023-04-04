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
exports.createToDo = void 0;
const task_1 = __importDefault(require("../model/task"));
const createToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log("Data", data);
        var backend = yield task_1.default.create(data);
        return res
            .status(200)
            .json({ message: "Todo created successfully", data: backend });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createToDo = createToDo;
// export const getToDo: RequestHandler = async (req, res, next) => {
//   try {
//     var todos = await Todo.find({});
//     return res.status(200).json({ message: "All todos!", data: todos });
//   } catch (error: any) {
//     return res.status(500).json({ message: error.message });
//   }
// };
// export const updateToDo: RequestHandler = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     var todos = await Todo.findByIdAndUpdate(id, req.body, { new: true });
//     return res
//       .status(200)
//       .json({ message: "Todo updated successfully!", data: todos });
//   } catch (error: any) {
//     return res.status(500).json({ message: error.message });
//   }
// };
// export const deleteToDo: RequestHandler = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     var isDeleted = await Todo.findByIdAndDelete(id);
//     if (!isDeleted) throw new Error("Failed to delete todo");
//     return res.status(200).json({ message: "Todo deleted successfully!" });
//   } catch (error: any) {
//     return res.status(500).json({ message: error.message });
//   }
// };