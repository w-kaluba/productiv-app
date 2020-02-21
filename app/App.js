import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createTabNavigator } from "react-native-navigation";
import TimerStack from "./timer/TimerStack";
import TaskListStack from "./tasklist/TaskListStack";
import Ionicons from "react-native-vector-icons/Ionicons";

// Declaring navigation tree structure

const AppNavigator = createTabNavigator(
  {
    Timer: TimerStack,
    TaskList: TaskListStack
  },
  {
    initialRouteName: "TaskList",
    navigationOptions: {
      headerTintColor: "#ccc",
      headerStyle: {
        backgroundColor: "black"
      }
    }
  }
);
export default class App extends React.Component {
  // Rendering the timer
  render = () => {
    return (
      <View>
        <Timer />
        <SetTimerForm />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
