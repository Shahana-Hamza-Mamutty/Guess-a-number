import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    alignItems: "center"
  }
});

export default Input;
