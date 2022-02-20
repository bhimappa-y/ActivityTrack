import React, { Component } from "react";
import AppHeader from "./app_header";

export default class AddUser extends Component {
  render() {
    return (
      <>
        <View style={{ padding: 20 }}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={users}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => <Text>{item.name} </Text>}
            />
          )}
        </View>
        );
      </>
    );
  }
}
