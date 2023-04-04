"use strict";
// import express from "express";
// const app = express();
// const PORT=3000;
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
// app.listen(PORT,async()=>{
// try {
//     console.log(`listening on ${PORT}`);
// } catch (error) {
//     console.log("error")
// }
// });
const express_1 = __importDefault(require("express"));
const task_1 = __importDefault(require("./routes/task"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
const DB_URL = "mongodb://localhost:27017/backend";
const PORT = 8080;
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/task", task_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
// db.connect(DB_URL,async() => {
//     console.log("Database connected");
// });
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`listening on ${PORT}`);
    }
    catch (error) {
        console.log(error);
    }
}));
