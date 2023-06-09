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
const index_1 = require("./config/index");
const body_parser_1 = require("body-parser");
const task_1 = __importDefault(require("./routes/task"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/task", task_1.default);
app.use((err, req, res) => {
    res.status(500).json({ message: err.message });
});
mongoose
    .connect(index_1.DB)
    .then(() => {
    console.log("Connected to database");
    app.listen(index_1.PORT, () => {
        console.log(`Listening On PORT ${index_1.PORT}`);
    });
})
    .catch(() => {
    console.log("Unable to connect database");
});
