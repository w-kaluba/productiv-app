import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TaskListScreen from "./screens/TaskListScreen";
import AddTaskScreen from "./screens/AddTaskScreen";

const TaskListNavStack = createStackNavigator();

export default class TaskListStack extends React.Component {
  //   tasks are implemented as a list of task objects and saved in the state of the stack
  render() {
    return (
      <TaskListNavStack.Navigator initialRouteName={"TaskList"}>
        <TaskListNavStack.Screen name={"TaskList"} component={TaskListScreen} />
        <TaskListNavStack.Screen name={"AddTask"} component={AddTaskScreen} />
      </TaskListNavStack.Navigator>
    );
  }
}
