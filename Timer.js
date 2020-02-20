import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import vibrate from "./utils/vibrate";

export default class Timer extends React.Component {
  state = {
    resting: false,
    timeLeft: 1500000,
    running: true
  };

  componentDidMount() {
    if (this.state.running == true) {
      this.interval = setInterval(this.dec, 1000);
    } else {
      clearInterval(this.interval);
    }
  }

  // Clearing the increment
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Decrementing the timer
  dec = () => {
    console.log(this.state.timeLeft);
    if (this.state.timeLeft > 0) {
      this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1000 }));
    } else {
      vibrate();
      console.log("Rest");
      this.toggleBreak();
    }
  };

  // Function for the button that starts the timer
  startTimer = () => {
    if (!this.state.running) {
      this.interval = setInterval(this.dec, 1000);
      this.setState(prevState => ({
        running: true
      }));
    }
  };

  // Function for the button that starts the timer
  stopTimer = () => {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState(prevState => ({
        running: false
      }));
    }
  };

  resetTimer = () => {
    this.setState(prevState =>
      this.resting ? { timeLeft: 300000 } : { timeLeft: 1500000 }
    );
  };

  toggleBreak = () => {
    this.setState(prevState => ({
      resting: !prevState.resting,
      timeLeft: prevState.resting ? 1500000 : 1000
    }));
  };

  render() {
    let displaySeconds = this.state.timeLeft % 60000;
    let displayMinutes = (this.state.timeLeft - displaySeconds) / 60000;

    return (
      <View style={styles.container}>
        <Text style={styles.timer}>
          {displayMinutes}:{displaySeconds / 1000}
        </Text>
        <View style={styles.buttonBlock}>
          <View style={styles.button}>
            <Button onPress={this.startTimer} title={"Start"} />
          </View>
          <View style={styles.button}>
            <Button onPress={this.stopTimer} title={"Stop"} />
          </View>
          <View style={styles.button}>
            <Button onPress={this.resetTimer} title={"Reset"} />
          </View>
          <View style={styles.button}>
            <Button onPress={this.toggleBreak} title={"Take A Break"} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },

  timer: {
    color: "#fff",
    fontSize: 72
  },

  buttonBlock: {
    flexDirection: "row"
  },

  button: {
    margin: 5
  }
});
