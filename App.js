import React, { Component } from "react";
import { Text } from "react-native";
import Dog from "./components/app_footer";
import AppHeader from "./components/app_header";
import AppFooter from "./components/app_footer";
import { StyleSheet, View } from "react-native";
import AppBody from "./components/app_body";

export default class App extends Component {
  render() {
    return (
      <>
        <AppBody/>
      </>
    );
  }
}
