import React, { Component } from "react";
import { Text, TextInput } from "react-native";
import { StyleSheet, View } from "react-native";
import { ScrollView, Button } from "react-native";
import AppHeader from "./app_header";
import Footer from "./footer";
import data from "./customData.json";

const word = data;

class AddActivity extends Component {
  state = {
    datasource: [],
    username: "",
    time: "",
    repetation: "",
    discription: "",
  };

  _storeData = async () => {
    let party = {
      username: this.state.username,
      time: this.state.time,
      repetation: this.state.repetation,
      discription: this.state.discription,
    };
    let data = JSON.stringify(party);
    console.log(data);
  };

  render() {
    return (
      <>
        <AppHeader />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}> Activity Name</Text>
          <TextInput
            style={styles.textInput}
            ref="username"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          ></TextInput>

          <Text style={styles.text}> Activity Time </Text>
          <TextInput
            style={styles.textInput}
            ref="Time"
            onChangeText={(time) => this.setState({ time })}
            value={this.state.time}
          ></TextInput>

          <Text style={styles.text}> Activity Repetation </Text>
          <TextInput
            style={styles.textInput}
            ref="Repetation"
            onChangeText={(repetation) => this.setState({ repetation })}
            value={this.state.repetation}
          ></TextInput>

          <Text style={styles.text}> Activity Discription </Text>
          <TextInput
            style={styles.textInput}
            ref="Discription"
            onChangeText={(discription) => this.setState({ discription })}
            value={this.state.discription}
          ></TextInput>

          <View style={styles.button}>
            <Button
              title="Add You Activity Here"
              onPress={this._storeData}
              style={styles.button}
            />
          </View>
        </ScrollView>
        <Footer />
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    margin: 20,
  },
  button: {
    margin: 10,
  },
  text: {
    margin: 10,
  },
  textInput: {
    padding: 5,
    margin: 10,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
});

export default AddActivity;
