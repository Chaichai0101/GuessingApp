import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import ThemeButton from "./theme";

// use react-native-really-awesome btn with custom theme, for btn import check "theme.js"
const MainButton = props => {
  return (
    <ThemeButton
      {...props}
      textSize={16}
      style={{ ...props.button, ...props.style }}
    />
  );
};

const TextButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{ ...styles.textbtn, ...styles.button, ...props.style }}
    >
      <Text style={{ ...styles.btnText, ...props.style }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export { MainButton, TextButton };

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    height: 50,
    justifyContent: "center"
  },
  textbtn: {},
  btnText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
