import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

class Asha extends Component {
  state = { isHungry: true };

  render() {
    return (
      <View style={styles.buttonStyle}>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? " hungry" : " full"}!
        </Text>
        <Button
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry
              ? "Pour me some milk, please!"
              : "Thank you Bhimappa!!!"
          }
        />
      </View>
    );
  }
}

class AppFooter extends Component {
  render() {
    return (
      <>
        <Asha name="Munkustrap" />
        <Asha name="Spot" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    bottom: 0,
    elevation: 5,
    margin: 20,
    height: 40,
  },
});

export default AppFooter;
