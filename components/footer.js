import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

class Asha extends Component {
  state = { isHungry: true };

  render() {
    return (
      <View style={styles.buttonStyle}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <>
        <Asha name="Hi, This your Activity Tracker!!." />
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    height: 40,
    backgroundColor: "coral",
  },
});

export default Footer;
