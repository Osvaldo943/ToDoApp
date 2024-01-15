import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASKS_COLLECTION } from "../storageConfig";
import { TASK_PROPS } from "@src/@types/task";

export async function TasksGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TASKS_COLLECTION);

    const tasks: TASK_PROPS[] = storage ? JSON.parse(storage) : [];

    return tasks;
  } catch (err) {
    console.log(err);
  }
}
