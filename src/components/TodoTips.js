import React from "react";
import {StyleSheet, View} from "react-native";
import {TodoTip} from "./TodoTip.js";

export const TodoTips = (props) => {
  const tips = props.todos.map((todo) => {
    return (
      <TodoTip
        id={todo.id}
        title={todo.title}
        removeTodo={props.removeTodo}
        key={todo.id} />
    );
  });
  
  return (
    <View style={styles.root}>
      {tips}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
  }
});
