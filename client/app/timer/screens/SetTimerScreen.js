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
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.formLabel}>Work Time</Text>
          <Text style={styles.formField}>Minutes</Text>
          <TextInput
            keyboardType={"numeric"}
            value={this.state.workTimeMinutes}
            onChangeText={this.handleChangeTime("workTimeMinutes")}
          />
          <Text style={styles.formField}>Seconds</Text>
          <TextInput
            keyboardType={"numeric"}
            value={this.state.workTimeSeconds}
            onChangeText={this.handleChangeTime("workTimeSeconds")}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.formLabel}>Rest Time</Text>
          <Text style={styles.formField}>Minutes</Text>
          <TextInput
            keyboardType={"numeric"}
            value={this.state.restTimeMinutes}
            onChangeText={this.handleChangeTime("restTimeMinutes")}
          />
          <Text style={styles.formField}>Seconds</Text>
          <TextInput
            keyboardType={"numeric"}
            value={this.state.restkTimeSeconds}
            onChangeText={this.handleChangeTime("restTimeSeconds")}
          />
        </View>
        <Button
          title={"GO"}
          onPress={() => {
            let workTime =
              +this.state.workTimeMinutes * 60 * 1000 +
              +this.state.workTimeSeconds * 1000;
            let restTime =
              +this.state.restTimeMinutes * 60 * 1000 +
              +this.state.restTimeSeconds * 1000;

            this.props.navigation.navigate("TimerScreen", {
              workTime: workTime,
              restTime: restTime
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  formLabel: {
    fontSize: 36
  },
  formField: {
    fontSize: 24
  }
});
