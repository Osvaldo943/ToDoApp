import AsyncStorage from "@react-native-async-storage/async-storage";
import { TasksGetAll } from "./taskGetAll";
import { TASK_PROPS } from "../../@types/task";
import { TASKS_COLLECTION } from "../storageConfig";

export async function EditTaskStatus(idTask: number, status: boolean) {
  try {
    var tasks = (await TasksGetAll()) || [];
    console.log("edited status", !status);

    if (tasks !== undefined && idTask >= 0 && idTask < tasks.length) {
      tasks[idTask].status = !status;
      console.log(tasks[idTask]);
    }

    await AsyncStorage.setItem(TASKS_COLLECTION, JSON.stringify(tasks));
  } catch (err) {
    console.log(err);
  }
}
