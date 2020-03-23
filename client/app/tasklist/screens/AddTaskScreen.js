import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { addTask } from "../../../redux/actions";

class AddTaskScreen extends React.Component {
  state = {
    task: {
      taskTitle: "",
      taskDescription: "",
      category: null
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
    console.log(this.state);
    console.log(this.props);
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
  return { tasklist: tasks };
}

export default connect(mapStateToProps)(AddTaskScreen);
