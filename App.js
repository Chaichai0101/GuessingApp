import React, { Component, useState } from "react";
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
  Modal
} from "react-native";
import Header from "./components/Header";
import Colors from "./constants/color";
import Card from "./components/Card";
import Input from "./components/Input";
import { MainButton, TextButton } from "./components/Button/Button";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const App = props => {
  const [enteredNum, setEnteredNum] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNum, setSelectedNum] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  // to prevent input decimal sysmbol from android keyboard
  const numberInputHandler = inputText => {
    setEnteredNum(inputText.replace(/[^0-9]/g, ""));
  };

  ///reset the input
  const resetHandler = () => {
    setEnteredNum("");
    setIsConfirmed(false);
  };

  const confirmInputHandler = () => {
    let chosenNumber = parseInt(enteredNum);
    setSelectedNum(chosenNumber);
    setEnteredNum("");
    setIsConfirmed(true);
    Keyboard.dismiss();
    setModalVisible(true);
  };

  const closeModalHandler = () => {
    if (modalVisible) {
      setModalVisible(false);
    } else setModalVisible(true);
  };

  let confirmOutput;
  if (isConfirmed) {
    confirmOutput = (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <TouchableWithoutFeedback onPress={closeModalHandler}>
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Card style={styles.confirmOutput}>
            <Text>Please Confirm your number</Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginVertical: 16
              }}
            >
              {selectedNum}
            </Text>
            <MainButton>Confirm</MainButton>
          </Card>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={styles.Container}>
      <Header title={"Let's play a game"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <Card style={styles.card}>
            <Text style={styles.title}>Please input a number</Text>
            <Input
              style={styles.inputBig}
              placeholder={"Any Number"}
              keyboardType={"number-pad"}
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enteredNum}
            />
            <View style={styles.btnContainer}>
              <TextButton
                style={{ color: Colors.primary }}
                title="reset"
                onPress={resetHandler}
              />
              <MainButton width={150} onPress={confirmInputHandler}>
                Guess
              </MainButton>
            </View>
          </Card>
          {confirmOutput}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: Colors.primary
  },
  content: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: "center"
  },
  card: {
    alignItems: "center",
    zIndex: 999
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.title
  },
  inputBig: {
    paddingVertical: 48,
    fontSize: 32,
    fontWeight: "bold",
    backgroundColor: "white",
    borderBottomWidth: 0,
    textAlign: "center"
  },
  btnContainer: {
    flexDirection: "row"
  },
  confirmOutput: {
    alignItems: "center"
  }
});
