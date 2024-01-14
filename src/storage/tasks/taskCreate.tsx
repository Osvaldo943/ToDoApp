import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASKS_COLLECTION } from "../storageConfig";
import { TasksGetAll } from "./getAllTasks";

export async function taskCreate(newTask: any) {
  try {
    var storedTasks = await TasksGetAll();
    console.log("pegando  todos tasks");

    storedTasks?.push(newTask);

    AsyncStorage.setItem(TASKS_COLLECTION, JSON.stringify(storedTasks));
    console.log("task salva");
  } catch (err) {
    console.log(err);
  }
}
