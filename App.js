import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PullUPScreenDrag from "./components/PullUpScreenDrag";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PullUPScreenDrag />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#751AFF",
    justifyContent: "center"
  },

  text: { color: "#fff" }
});
