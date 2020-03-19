import React, { Component, useState } from "react";
import { NoticeBar, WhiteSpace } from "@ant-design/react-native";
import { padding } from "../constants/style";
import { AntDesign } from "@expo/vector-icons";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  // Modal,
  Alert
} from "react-native";

//import library
import Modal from "react-native-modal";

//import component
// import Header from "../../components/Header";
import Colors from "../constants/color";
import Card from "../components/Card";
import Input from "../components/Input";
import { MainButton, TextButton } from "../components/Button/Button";

const generateRandomNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNum(min, max, exclude);
  } else {
    return rndNum;
  }
};

const noticeBarIcon = <AntDesign name="infocirlceo" size="md" />;

const GameScreen = props => {
  const [roundNum, setroundNum] = useState(0);

  return (
    <View style={styles.Container}>
      <NoticeBar
        onPress={() => alert("click")}
        icon={noticeBarIcon}
        marqueeProps={{
          loop: true,
          style: { fontSize: 14, color: Colors.title }
        }}
        style={{ height: 50 }}
      >
        Friendly remind : your chosen number is{" "}
        <Text style={{ fontWeight: "bold" }}>{props.userChoice}</Text>
      </NoticeBar>

      <Card style={styles.OpponentContainer}>
        <Text style={styles.OpponentNum}>
          {generateRandomNum(1, 100, props.userChoice)}
        </Text>
      </Card>
      <View style={styles.ButtonContainer}>
        <MainButton width={105}>
          <AntDesign name="caretleft" size={16} color="white" />
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Lesser
          </Text>
        </MainButton>

        <MainButton width={105}>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              paddingLeft: 5
            }}
          >
            Greater
          </Text>
          <AntDesign name="caretright" size={16} color="white" />
        </MainButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.bg
  },
  OpponentContainer: {
    width: "60%",
    alignItems: "center"
  },
  OpponentNum: {
    fontSize: 32,
    color: Colors.primary
  },
  ButtonContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between"
  }
});
