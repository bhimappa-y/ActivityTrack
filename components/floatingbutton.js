import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from "react-native";

export default class Floating extends Component {
  SampleFunction = () => {
    Alert.alert("Floating Button Clicked");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Button
          title="Add some friends"
          onPress={() => this.props.navigation.navigate("Friends")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },

  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});
