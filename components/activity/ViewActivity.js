import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

class ViewActivity extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.route.params);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.props.route.params.username}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});

export default ViewActivity;
