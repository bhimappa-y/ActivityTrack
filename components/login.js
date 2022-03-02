import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, RefreshControl} from "react-native";
import { StyleSheet, View, Button, Alert } from "react-native";
import AppHeader from "./app_header";
import Footer from "./footer";
import * as SQLite from 'expo-sqlite';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from "react-native/Libraries/NewAppScreen";



const db = SQLite.openDatabase("TestDb.db");

class LogIn extends Component {

  constructor(props) {
    super(props);
    this._storeData()
  }

  state = {
    FlatListItems: [],
    refreshing: false,
  };

  _storeData = async () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_activity', [], (tx, results) => {
        var temp = [];
        console.log(temp)
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }

  onRefresh = () => {
    this.setState({
      refreshing:true,
    })
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_activity', [], (tx, results) => {
        var temp = [];
        console.log(temp)
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
    this.setState({
      refreshing:false,
    })
  }

  render() {
    return (
      <>
        <AppHeader />
        <FlatList 
          data={this.state.FlatListItems}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.text}
              onPress={() =>
                this.props.navigation.navigate("View Activity", item)
              }
            >
              <View style={styles.act}>
              <Text>{item.username}</Text>
              <Text style={styles.delete}> {item.username}</Text>
             
              </View>
              
            </TouchableOpacity>
          )} 
          refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
        />
   
        <View  style={styles.MainContainer} >
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
  itemname:{
    paddingRight:20
  },
  text: {
    margin: 5,
    paddingRight: 20,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#000",
    
    
  },
  MainContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    marginBottom:10
  },
  act: {
    fontSize: 20,
    flexDirection: 'row'
  }, 
  delete: {
    flex:1
  }
  
});

export default LogIn;
