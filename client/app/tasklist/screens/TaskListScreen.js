import React from "react";
import { StyleSheet, ScrollView, View, Button } from "react-native";
import Row from "./Row";

export default class TaskListScreen extends React.Component {
  state = {
    ...this.props.route.params
  };

  render() {
    console.log(this.state);
    return (
      <View>
        <ScrollView>
          {this.state.tasks.map((task, i) => (
            <Row task={task} key={i} />
          ))}
        </ScrollView>
        <Button
          title={"Add Task"}
          onPress={() => {
            this.props.navigation.navigate("AddTask");
          }}
        />
      </View>
    );
  }
}
