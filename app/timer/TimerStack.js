import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createSwitchNavigator } from "react-native-navigation";
import TimerScreen from "./screens/TimerScreen";
import SetTimerScreen from "./screens/SetTimerScreen";

const TimerStackNavigator = createSwitchNavigator(
  {
    Timer: TimerScreen,
    SetTimer: SetTimerScreen
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
