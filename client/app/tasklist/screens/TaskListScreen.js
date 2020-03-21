import React from "react";
import { connect } from "react-redux";
import { StyleSheet, ScrollView, View, Button } from "react-native";
import Row from "./Row";

class TaskListScreen extends React.Component {
  state = {
    ...this.props
  };

  render() {
    console.log("State:\n");
    console.log(this.state);
    console.log("Props:\n");
    console.log(this.props);
    return (
      <View>
        <ScrollView>
          {this.props.tasklist
            ? this.props.tasklist.map((task, i) => <Row task={task} key={i} />)
            : null}
        </ScrollView>
        <Button
          title={"Add Task"}
          onPress={() => {
            console.log(this.state);
            this.props.navigation.navigate("AddTask");
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

export default connect(mapStateToProps)(TaskListScreen);
