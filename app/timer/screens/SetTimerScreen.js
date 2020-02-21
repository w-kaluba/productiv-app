import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class SetTimerScreen extends React.Component {
  state = {
    workTimeMinutes: "0",
    workTimeSeconds: "0",
    restTimeMinutes: "0",
    restTimeSeconds: "0"
  };

  // Function to update the time state when form input changes
  handleChangeTime = key => value => {
    this.setState({ [key]: value });
  };

  render() {
    console.log(this.props);
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text>Work Time</Text>
          <Text>Minutes</Text>
          <TextInput
            keyboardType={"numeric"}
            value={this.state.workTimeMinutes}
            onChangeText={this.handleChangeTime("workTimeMinutes")}
          />
          <Text>Seconds</Text>
          <TextInput
            keyboardType={"numeric"}
            value={this.state.workTimeSeconds}
            onChangeText={this.handleChangeTime("workTimeSeconds")}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text>Rest Time</Text>
          <Text>Minutes</Text>
          <TextInput
            keyboardType={"numeric"}
            value={this.state.restTimeMinutes}
            onChangeText={this.handleChangeTime("restTimeMinutes")}
          />
          <Text>Seconds</Text>
          <TextInput
            keyboardType={"numeric"}
            value={this.state.restkTimeSeconds}
            onChangeText={this.handleChangeTime("restTimeSeconds")}
          />
        </View>
        <Button
          title={"GO"}
          onPress={() =>
            this.props.navigation.navigate("TimerScreen", {
              ...this.state
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formLabel: {
    fontSize: 36
  }
});
