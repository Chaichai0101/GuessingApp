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
  // Modal,
  Alert
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

//import library
import Modal from "react-native-modal";

//import component
// import Header from "../../components/Header";
import Colors from "../constants/color";
import Card from "../components/Card";
import Input from "../components/Input";
import { MainButton, TextButton } from "../components/Button/Button";
import GameScreen from "./GameScreen";

const StartGameScreen = props => {
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
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay lor", style: "cancel", onPress: resetHandler }]
      );
      return;
    }

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
        // transparent={true}
        isVisible={modalVisible}
        onBackdropPress={closeModalHandler}
        hasBackdrop={true}
        // coverScreen={true}
        backdropColor="black"
        backdropOpacity={0.5}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
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

          <MainButton onPress={() => props.onStartGame(selectedNum)}>
            Confirm
          </MainButton>
        </Card>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={styles.Container}>
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

export default StartGameScreen;

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
