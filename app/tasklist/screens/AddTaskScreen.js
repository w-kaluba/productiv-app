import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class AddTaskScreen extends React.Component {
  state = {
    ...route.params,
    task: {
      taskTitle: "",
      taskDescription: ""
    }
  };

  // Function to update the time state when form input changes
  handleChangeTime = key => value => {
    this.setState({ [key]: val });
  };

  render() {
    return (
      <View>
        <Text>Task:</Text>
        <TextInput
          value={this.state.workTimeMinutes}
          onChangeText={this.handleChangeTime("workTimeMinutes")}
        />
        <Text>Description:</Text>
        <TextInput
          value={this.state.restTimeMinutes}
          onChangeText={this.handleChangeTime("restTimeMinutes")}
        />
        <Button
          title={"Add Task"}
          onPress={this.props.navigation.navigate("TaskListScreen", {
            ...this.state
          })}
        />
      </View>
    );
  }
}
