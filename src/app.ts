
// import express from "express";
// import db from "mongoose";
// import todoRoutes from "./routes/task";
// import { json, urlencoded } from "body-parser";

// const app = express();
// const PORT=8080;
// app.use(json());
// app.use(urlencoded({ extended: true }));
// app.use("/task", todoRoutes);
// app.use(
//   (
//     err: Error,
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     res.status(500).json({ message: err.message });
//   }
// );
// db.connect("mongodb://localhost:27017/backend",()=>{

//     console.log("Database connected");
// });
// app.listen(PORT,async()=>{
//     try {
//      console.log(`listening on ${PORT}`);
//     } catch (error) {
//         console.log(error)
//     }
// });