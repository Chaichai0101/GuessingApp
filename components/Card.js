import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../constants/layout";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: Layout.width - 32,
    marginVertical: 16,
    padding: 16,
    paddingVertical: 32,
    borderRadius: 8,

    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }
});
