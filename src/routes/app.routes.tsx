import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tasks from "../screens/tasksScreen";
import AddTask from "../screens/addTaskScreen";
import TaskDetails from "../screens/taskDetailsScreen";

const { Screen, Navigator } = createStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="tasks" component={Tasks} />
      <Screen name="addTask" component={AddTask} />
      <Screen name="taskDetails" component={TaskDetails} />
    </Navigator>
  );
}
