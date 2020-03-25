import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { addTask } from "../../../redux/actions";
import { Dropdown } from "react-native-material-dropdown";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignContent: "center",
    padding: 50
  },
  button: {
    maxWidth: 300,
    marginTop: 20
  }
});
class AddTaskScreen extends React.Component {
  state = {
    detailView: false,
    task: {
      taskTitle: "",
      taskDescription: "",
      category: null
    }
  };

  renderDropdown = (
    label = "Select...",
    data = [{ value: "New category..." }]
  ) => {
    return (
      <Dropdown
        label={label}
        data={data}
        onChangeText={value => {
          this.setState(prevState => ({
            task: {
              ...prevState.task,
              category: value
            }
          }));
        }}
      />
    );
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

  toggleDetails = () => {
    this.setState(prevState => ({
      detailView: !prevState.detailView
    }));
  };

  render() {
    return (
      <View style={styles.container}>
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
        <View style={styles.button}>
          <Button
            title={"Add Task"}
            onPress={() => {
              this.props.dispatch(addTask(this.state.task));
              this.props.navigation.navigate("TaskList");
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={"More..."}
            buttonStyle={styles.button}
            onPress={this.toggleDetails}
          />
          {this.state.detailView ? this.renderDropdown("Category...") : null}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { tasks, categories } = state;
  return { tasklist: tasks, categories: categories };
}

export default connect(mapStateToProps)(AddTaskScreen);
