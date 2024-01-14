import AsyncStorage from "@react-native-async-storage/async-storage";
import { TasksGetAll } from "./taskGetAll";
import { TASK_PROPS } from "../../@types/task";
import { TASKS_COLLECTION } from "../storageConfig";

export async function EditOneTask(idTask: number, task: TASK_PROPS) {
  try {
    var tasks: TASK_PROPS[] = await TasksGetAll;

    tasks[idTask] = task;

    AsyncStorage.setItem(TASKS_COLLECTION, JSON.stringify(tasks));
  } catch (err) {
    console.log(err);
  }
}
