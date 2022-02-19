import React, { Component } from "react";
import { Text } from "react-native";
import { StyleSheet, View, Button, Alert } from "react-native";
import { ScrollView } from "react-native";
import AppFooter from "./app_footer";
import AppHeader from "./app_header";
import Floating from "./floatingbutton";
import Footer from "./footer";
import SQLite from 'react-native-sqlite-storage';
   

class LogIn extends Component {

  constructor() {
    super()
    
  }
  
  render() {
  
    return (
      <>
        <AppHeader />
        <ScrollView style={{ flex: 10 }} createTable>
          <Text>User Login Details!!</Text>
        </ScrollView>
        <View style={styles.MainContainer}>
          <Button
            title="Add You Activity Here"
            onPress={() => this.props.navigation.navigate("Add Activity")}
          />
        </View>
        <Footer />
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    backgroundColor: "coral",
  },

  MainContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
});

export default LogIn;
