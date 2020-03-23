import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  row: { padding: 20 }
});

export default class Row extends React.Component {
  /* The props passed to a Row contain 
    a tasks array containing task objects*/
  state = {
    ...this.props,
    descShowing: false
  };

  toggleDesc = () => {
    this.setState(prevState => ({ descShowing: !prevState.descShowing }));
  };

  render() {
    return (
      <TouchableOpacity style={styles.row} onPress={this.toggleDesc}>
        <Text>
          {this.state.task.taskTitle
            ? this.state.task.taskTitle
            : "Untitled Task"}
        </Text>
        <Text>
          {this.state.descShowing ? this.state.task.taskDescription : null}
        </Text>
      </TouchableOpacity>
    );
  }
}
