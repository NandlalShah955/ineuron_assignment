"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = __importStar(require("mongoose"));
const task_1 = __importDefault(require("./routes/task"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
const PORT = 8080;
const URL = "mongodb://localhost:27017/backend";
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/task", task_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
mongoose
    .connect(URL)
    .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
        console.log(`Listening On PORT ${PORT}`);
    });
})
    .catch(() => {
    console.log("Unable to connect database");
});
// mongoose.connect("mongodb://localhost:27017/backend",()=>{
//   console.log("Database connected");
// });
// app.listen(PORT,async()=>{
//     try {
//      console.log(`listening on ${PORT}`);
//     } catch (error) {
//         console.log(error)
//     }
// });
