import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Row from "./Row";

export default class TaskListScreen extends React.Component {
  state = {
    ...this.props.route.params
  };

  render() {
    console.log(this.state);
    let tasks = this.state.tasks;
    return (
      <ScrollView>
        {this.state.tasks.map((task, i) => (
          <Row task={task} key={i} />
        ))}
      </ScrollView>
    );
  }
}
