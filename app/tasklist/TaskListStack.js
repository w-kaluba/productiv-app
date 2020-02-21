import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-native-navigation";
import TaskListScreen from "./screens/TimerScreen";
import AddTaskScreen from "./screens/SetTimerScreen";

const TaskListNavigator = createStackNavigator(
  {
    TaskList: TaskListScreen,
    AddTask: AddTaskScreen
  },
  {
    initialRouteName: "SetTimerScreen"
  }
);

export default class TimerStack extends React.Component {
  state = {
    workTime: 0,
    restTime: 0
  };
  render() {
    return (
      <TimerStackNavigator
        screenProps={{
          ...this.state
        }}
      />
    );
  }
}
