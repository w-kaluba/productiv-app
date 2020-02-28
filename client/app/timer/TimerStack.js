import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TimerScreen from "./screens/TimerScreen.js";
import SetTimerScreen from "./screens/SetTimerScreen.js";

const TimerNavStack = createStackNavigator();
export default class TimerStack extends React.Component {
  state = {
    workTime: "0",
    restTime: "0"
  };
  render() {
    return (
      <TimerNavStack.Navigator initialRouteName={"SetTimerScreen"}>
        <TimerNavStack.Screen
          name={"TimerScreen"}
          component={TimerScreen}
          initialParams={{ ...this.state }}
        />
        <TimerNavStack.Screen
          name={"SetTimerScreen"}
          component={SetTimerScreen}
          initialParams={{ ...this.state }}
        />
      </TimerNavStack.Navigator>
    );
  }
}
