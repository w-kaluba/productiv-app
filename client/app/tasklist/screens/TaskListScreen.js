import React from "react";
import { connect } from "react-redux";
import { StyleSheet, ScrollView, View, Button } from "react-native";
import Row from "./Row";

class TaskListScreen extends React.Component {
  state = {
    ...this.props
  };

  render() {
    console.log(this.state);
    return (
      <View>
        <ScrollView>
          {this.state.tasklist
            ? this.state.tasklist.map((task, i) => <Row task={task} key={i} />)
            : null}
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

function mapStateToProps(state) {
  const { tasks } = state;
  return { tasklist: tasks.allIds };
}

export default connect(mapStateToProps)(TaskListScreen);
