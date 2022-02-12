import React, { Component } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import AppFooter from "./app_footer";
import AppHeader from "./app_header";
import Floating from "./floatingbutton";
import Footer from "./footer";

class AddActivity extends Component {
  render() {
    return (
        <>
        <AppHeader/>
        <Text>Bhimapp Yalagudri</Text>
        <Footer/>
        </>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    height:50,
    backgroundColor: 'coral',
  },
});

export default AddActivity;
