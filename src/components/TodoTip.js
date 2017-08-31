import React from "react";
import {Text, View, Button} from "react-native";
import {StyleSheet} from "react-native";

export const TodoTip = (props) => {
  return (
    <View style={styles.root} >
      <Text style={styles.text} >{props.id}. {props.title}</Text>
      <Button title="x" onPress={() => props.removeTodo(props.id)} color="#ccc" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
    fontSize: 24,
    color: "#555"
  }
});
