

import * as mongoose from "mongoose";
import { Model } from "mongoose";

type TaskType = TaskModel & mongoose.Document;
export interface TaskModel {
  title: {type: String,required: true,};
  description: {type: String,required: true,};
}
const TaskSchema = new mongoose.Schema({
  title: {type: String,required: true,},
  description: {type: String,required: true,},
});
const Task: Model<TaskType> = mongoose.model < TaskType > ("Todo", TaskSchema);
export default Task;