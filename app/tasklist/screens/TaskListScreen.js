import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Row from "./Row";

export default class TaskListScreen extends React.Component {
  state = { ...route.params };

  render() {
    return (
      <ScrollView>
        {this.state.tasks.map(task => (
          <Row {...task} />
        ))}
      </ScrollView>
    );
  }
}
