import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import ImagePicker from "react-native-image-picker";

const NewFileAddition = (props) => {
  const handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log("response", response.data);
    });
  };

  return (
    <Modal visible={props.visible} animationType='fade'>
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              color='red'
              onPress={() => {
                props.onCancel();
              }}
            />

          </View>
          <View style={styles.button}>  
          +
          \Button title='Add Item' onPress={handleChoosePhoto} /> 
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "50%",
  },
});

export default NewFileAddition;
