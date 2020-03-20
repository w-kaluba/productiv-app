import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { addTask } from "../../../redux/actions";

class AddTaskScreen extends React.Component {
  state = {
    task: {
      taskTitle: "",
      taskDescription: ""
    }
  };

  // Function to update the state when form input changes
  handleChangeText = key => value => {
    this.setState(prevState => ({
      task: {
        ...prevState.task,
        [key]: value
      }
    }));
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
            console.log(this.state.task);
            this.props.dispatch(addTask(this.state.task));
            this.props.navigation.navigate("TaskList");
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { tasks } = state;
  return { tasklist: tasks.allIds };
}

export default connect(mapStateToProps)(AddTaskScreen);
