import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import TaskListScreen from "./screens/TaskListScreen";
import AddTaskScreen from "./screens/AddTaskScreen";

const TaskListNavStack = createStackNavigator();

export default class TaskListStack extends React.Component {
  //   tasks are implemented as a list of task objects and saved in the state of the stack
  state = {
    tasks: []
  };
  render() {
    return (
      <TaskListNavStack.Navigator initialRouteName={"TaskList"}>
        <TaskListNavStack.Screen
          name={"TaskList"}
          component={TaskListScreen}
          initialParams={{ ...this.state }}
        />
        <TaskListNavStack.Screen
          name={"AddTask"}
          component={AddTaskScreen}
          initialParams={{ ...this.state }}
        />
      </TaskListNavStack.Navigator>
    );
  }
}
