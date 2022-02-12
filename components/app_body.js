import React, { Component } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import AppFooter from "./app_footer";
import AppHeader from "./app_header";
import LogIn from "./login";
import Floating from "./floatingbutton";

class AppBody extends Component {
  render() {
    return (
        <>
        
        <LogIn/>
        
        </>
    );
  }
}


export default AppBody;
