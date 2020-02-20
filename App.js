import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Timer from "./Timer";
import SetTimerForm from "./SetTimer";

export default class App extends React.Component {
  // Incrementing the timer every second.

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
