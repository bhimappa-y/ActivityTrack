import React, { Component } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import AppFooter from "./app_footer";
import AppHeader from "./app_header";
import Floating from "./floatingbutton";
import Footer from "./footer";

class LogIn extends Component {
  render() {
    return (
        <>
        <AppHeader/>
        <ScrollView style={{flex:10}}>
         <Text>User Login Details!!</Text>
         <AppFooter/>
         <AppFooter/>
         <AppFooter/>
         <AppFooter/>
         <AppFooter/>
         <AppFooter/>
        </ScrollView>
        <Floating/>
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

export default LogIn;
