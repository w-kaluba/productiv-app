import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskListStack from "./app/tasklist/TaskListStack";
import TimerStack from "./app/timer/TimerStack";
import Ionicons from "react-native-vector-icons/Ionicons";

// Declaring navigation tree structure

const RootStack = createBottomTabNavigator();
export default class App extends React.Component {
  render = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator initialRouteName={"TaskListStack"}>
          <RootStack.Screen name={"TaskListStack"} component={TaskListStack} />
          <RootStack.Screen name={"TimerStack"} component={TimerStack} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };
}
