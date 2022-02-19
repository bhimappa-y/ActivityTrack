import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./login";
import AddActivity from "./addactivity";

const Stack = createNativeStackNavigator();

class AppBody extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Activity Tracker">
          <Stack.Screen name="Activity Tracker" component={LogIn} />
          <Stack.Screen name="Add Activity" component={AddActivity} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppBody;
