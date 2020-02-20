import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class SetTimerForm extends React.Component {
  state = {
    workTime: 0,
    restTime: 0
  };
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text>Work Time</Text>
          <Text>Minutes</Text>
          <TextInput keyboardType={"numeric"} />
          <Text>Seconds</Text>
          <TextInput keyboardType={"numeric"} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text>Rest Time</Text>
          <Text>Minutes</Text>
          <TextInput keyboardType={"numeric"} />
          <Text>Seconds</Text>
          <TextInput keyboardType={"numeric"} />
        </View>
      </View>
    );
  }
}
