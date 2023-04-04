
import express from "express";
import * as mongoose from "mongoose";
import {DB,PORT} from "./config/index"
import { json, urlencoded } from "body-parser";
import taskRoutes from "./routes/task";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/task", taskRoutes);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
  ) => {
    res.status(500).json({ message: err.message });
  }
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Listening On PORT ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Unable to connect database");
  });
