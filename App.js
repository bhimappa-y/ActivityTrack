import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";

import Header from "./components/header";
import Activitys from "./components/activity_items";

export default function App() {
  const [act, setAct] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const printValues = (e) => {
    e.preventDefault();
    console.log(act.text, act.key);
  };

  return (
    <View>
      <Header />
      <View>
        <View style={styles.list}>
          <FlatList
            data={act}
            renderItem={({ item }) => <Activitys item={item} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "coral",
  },
  list: {
    marginBottom: 20,
  },
});
