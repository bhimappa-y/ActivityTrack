import React, { Component } from "react";
import { Text, TextInput,Alert } from "react-native";
import { StyleSheet, View } from "react-native";
import { ScrollView, Button } from "react-native";
import AppHeader from "./app_header";
import Footer from "./footer";
import data from "./customData.json";
import * as SQLite from 'expo-sqlite';




class AddActivity extends Component {


  state = {
    datasource: [],
    username: "",
    time: "",
    repetation: "",
    discription: "",
  };

  constructor(props){
    super(props)
  }



  _storeData = async () => {
    
    var that = this;
    const {username} = this.state;
    const {time} = this.state;
    const {repetation} = this.state;
    const {discription} = this.state;

    alert(username, time, repetation, discription);

    const db = SQLite.openDatabase("TestDb.db");
     
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists table_activity (id integer primary key not null, username text, time text, repetation int, discription text);"
      );
    })

    

    db.transaction(function(tx) {
      tx.executeSql(
        'INSERT INTO table_activity (username, time, repetation, discription) VALUES (?,?,?,?)',
        [username, time, repetation, discription],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () =>
                    that.props.navigation.navigate('Activity Tracker'),
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Registration Failed');
          }
        },
      );
    });

    db.transaction(
      (tx) => {
        //console.log(this.state.username)
          tx.executeSql("select * from table_activity", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      }
    );



    
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
