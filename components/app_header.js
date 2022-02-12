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
    marginTop: 50,
    elevation: 5,
    alignItems: "center",
    height:40,
    backgroundColor: 'coral',
  },
});

export default AppHeader;
