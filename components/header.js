import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, View } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> Activity Tracker </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
