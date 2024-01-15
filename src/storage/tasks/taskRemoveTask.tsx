import AsyncStorage from "@react-native-async-storage/async-storage";
import { TasksGetAll } from "./taskGetAll";
import { TASK_PROPS } from "../../@types/task";
import { TASKS_COLLECTION } from "../storageConfig";

export async function RemoveTask(idTask: number) {
  try {
    var tasks = (await TasksGetAll()) || [];

    if (tasks !== undefined && idTask >= 0 && idTask < tasks.length) {
      tasks.splice(idTask, 1);
    }

    await AsyncStorage.setItem(TASKS_COLLECTION, JSON.stringify(tasks));
  } catch (err) {
    console.log(err);
  }
}
