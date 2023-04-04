
import express from "express";
import * as mongoose from "mongoose";
import todoRoutes from "./routes/task";
import { json, urlencoded } from "body-parser";

const app = express();
const PORT=8080;
const URL="mongodb+srv://N:N@cluster0.4ibwcv2.mongodb.net/backend"
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/task", todoRoutes);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

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
