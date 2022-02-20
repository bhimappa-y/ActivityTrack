import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { StyleSheet, View, Button, Alert } from "react-native";
import { ScrollView } from "react-native";
import AppFooter from "./app_footer";
import AppHeader from "./app_header";
import Floating from "./floatingbutton";
import Footer from "./footer";
import SQLite from "react-native-sqlite-storage";
import jsonData from "./customData.json";

const exampleJson = jsonData.subject;

class LogIn extends Component {
  render() {
    return (
      <>
        <AppHeader />

        <FlatList
          data={exampleJson}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.text}
              onPress={() =>
                this.props.navigation.navigate("View Activity", item)
              }
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

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
  text: {
    margin: 5,
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  MainContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
});

export default LogIn;
