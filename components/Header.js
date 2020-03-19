import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/color";

const Header = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
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
