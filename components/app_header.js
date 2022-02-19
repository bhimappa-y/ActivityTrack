import React, { Component } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";

class AppHeader extends Component {
  render() {
    return (
      <View style={styles.buttonStyle}>
        <Text>Welcome To Activity Tracker</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    elevation: 5,
    alignItems: "center",
    height: 40,
    backgroundColor: "coral",
  },
});

export default AppHeader;
