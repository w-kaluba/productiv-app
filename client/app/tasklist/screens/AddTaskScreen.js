import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class AddTaskScreen extends React.Component {
  state = {
    ...this.props,
    task: {
      taskTitle: "",
      taskDescription: ""
    }
  };

  // Function to update the time state when form input changes
  handleChangeText = key => value => {
    this.setState({ task: { [key]: value } });
  };

  render() {
    return (
      <View>
        <Text>Task:</Text>
        <TextInput
          value={this.state.taskTitle}
          onChangeText={this.handleChangeText("taskTitle")}
        />
        <Text>Description:</Text>
        <TextInput
          value={this.state.taskDescription}
          onChangeText={this.handleChangeText("taskDescription")}
        />
        <Button
          title={"Add Task"}
          onPress={() => {
            console.log(this.state);
            this.setState(prevState => {
              tasks: [prevState.tasks, this.state.task];
            });
            this.props.navigation.navigate("TaskList", {
              ...this.state
            });
          }}
        />
      </View>
    );
  }
}
