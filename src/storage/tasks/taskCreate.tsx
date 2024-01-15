import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASKS_COLLECTION } from "../storageConfig";
import { TasksGetAll } from "./taskGetAll";

export async function taskCreate(newTask: any) {
  try {
    var storedTasks = await TasksGetAll();

    storedTasks?.push(newTask);

    await AsyncStorage.setItem(TASKS_COLLECTION, JSON.stringify(storedTasks));
  } catch (err) {
    console.log(err);
  }
}
