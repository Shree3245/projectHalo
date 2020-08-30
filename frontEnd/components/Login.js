import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';
import LoginHandler from './LoginHandler';
const Login = (props) => {
  const [register, setRegister] = useState(false);
  const [user, setUser] = useState('');
  const [passw, setPassw] = useState('');
  const [email, setEmail] = useState('');
  const [loginBool, setLoginBool] = useState(false);

  const userHandler = (enteredText) => {
    setUser(enteredText);
  };

  const passwHandler = (enteredText) => {
    setPassw(enteredText);
  };

  const emailHandler = (enteredText) => {
    setEmail(enteredText);
  };

  return (
    <Modal animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={userHandler}
          value={user}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={passwHandler}
          value={passw}
        />
        {register ? (
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={emailHandler}
            value={email}
          />
        ) : null}

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Register"
              color="red"
              onPress={() => {
                setRegister(!register);
                console.log(register);
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Login"
              onPress={() => {
                setLoginBool(!loginBool);
              }}
            />
            {loginBool ? <LoginHandler /> : null}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '50%',
  },
});

export default Login;
