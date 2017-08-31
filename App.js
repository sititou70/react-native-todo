import React from "react";
import {StyleSheet, View, Button, Alert, ScrollView} from "react-native";
import {DB} from "./src/db/db.js";
import InputUi from "./src/components/InputUi.js";
import {TodoTips} from "./src/components/TodoTips.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: []
    };
    
    DB.todolist.find().then((data) => {
      this.setState({
        todos: data == null ? [] : data
      });
    });
  }
  
  addTodo(title) {
    if(title === "")return;
    
    const new_todo = {
      id: this.state.todos.length === 0 ? 1 : this.state.todos[this.state.todos.length - 1].id + 1,
      title
    };
    
    let new_todos = [...this.state.todos];
    new_todos.push(new_todo);
    
    this.setState({
      todos: new_todos
    });
    
    DB.todolist.add(new_todo);
  }
  
  removeTodo(id) {
    let new_todos = [...this.state.todos].filter((todo) => todo.id !== id);
    
    this.setState({
      todos: new_todos
    });
    
    DB.todolist.remove({
      where: {
        id: id
      }
    });
  }
  
  destroy() {
    Alert.alert(
      "すべてのTodoを削除します",
      "ほんまに？",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            this.setState({
              todos: []
            });
            DB.todolist.destroy();
          }
        },
      ],
      {
        cancelable: false
      }
    );
  }
  
  render() {
    return (
      <View style={styles.root}>
        <InputUi pressedAdd={this.addTodo.bind(this)} />
        <ScrollView style={styles.scroll_view}>
          <TodoTips todos={this.state.todos} removeTodo={this.removeTodo.bind(this)} />
          {this.state.todos.length !== 0 ? <Button title="delete all" onPress={this.destroy.bind(this)} color="#c77" /> : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  scroll_view: {
    flex: 1,
    width: "100%",
    marginBottom: 20
  }
});
