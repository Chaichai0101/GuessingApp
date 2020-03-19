import React, { Component, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
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
import Header from "./components/Header";
import Colors from "./constants/color";
import Card from "./components/Card";
import Input from "./components/Input";
import { MainButton, TextButton } from "./components/Button/Button";
// import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const fetchFonts = () => {
  return Font.loadAsync(
    "antoutline",
    // eslint-disable-next-line
    require("@ant-design/icons-react-native/fonts/antoutline.ttf"),

    "antfill",
    // eslint-disable-next-line
    require("@ant-design/icons-react-native/fonts/antfill.ttf")
  );
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const startGameHandler = selectedNum => {
    setUserNumber(selectedNum);
  };

  const resetGameHandler = () => {
    setUserNumber();
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber >= 0) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <SafeAreaView style={styles.Container}>
      <Header onPress={resetGameHandler} title={"Let's play a game"} />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: Colors.primary
  }
});
