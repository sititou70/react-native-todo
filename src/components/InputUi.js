import React from "react";
import {StyleSheet, TextInput, View, Button} from "react-native";

export default class InputUi extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: ""
    };
  }
  
  render(){
    return (
      <View style={styles.root}>
        <TextInput
          style={styles.text_input}
          onChangeText={(input) => this.setState({input})}
        ></TextInput>
        <Button title="add" onPress={() => this.props.pressedAdd(this.state.input)} color="#6ad" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    margin: 30,
    marginTop: 50,
    flexDirection: "row"
  },
  text_input: {
    flex: 1,
    marginRight: 20,
    borderBottomColor: "#89c3eb",
    borderBottomWidth: 1,
    color: "#555"
  }
});
