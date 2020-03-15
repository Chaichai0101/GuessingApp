import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/color";

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    minHeight: 45,
    paddingHorizontal: 8,
    width: "80%",
    backgroundColor: "#f0f0f7",
    borderRadius: 4,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default Input;
