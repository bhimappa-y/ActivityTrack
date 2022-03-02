import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

class FooterName extends Component {
 
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
        <FooterName name="Hi, This your Activity Tracker!!." />
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
