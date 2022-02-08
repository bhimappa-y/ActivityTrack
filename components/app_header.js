import React, { Component } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";

class AppHeader extends Component {
  render() {
    return (
      <View style={styles.buttonStyle}>
        <Text>Hello, I am your cat!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 80,
    paddingLeft: 20,
    elevation: 5,
    height: 40,
    color: "coral",
  },
});

export default AppHeader;
