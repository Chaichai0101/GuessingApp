import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});
