import React from "./node_modules/react";
import { createStackNavigator } from "./node_modules/@react-navigation/stack";
import TimerScreen from "./screens/TimerScreen.js.js";
import SetTimerScreen from "./screens/SetTimerScreen.js.js";

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
