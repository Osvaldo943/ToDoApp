import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tasks from "../screens/tasks";
import AddTask from "../screens/addTask";
import TaskDetails from "../screens/taskDetails";

const { Screen, Navigator } = createStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Tasks} />
      <Screen name="addTask" component={AddTask} />
      <Screen name="taskDetails" component={TaskDetails} />
    </Navigator>
  );
}
