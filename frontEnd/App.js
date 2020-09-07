import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import NewFileAddition from './components/NewFileAddition';
import Login from './components/Login';

export default function App() {
  const [items, setItems] = useState([]);
  const [addModalBool, setAddModalBool] = useState(false);
  const [loginBool, setLoginBool] = useState(true);

  return (
    <View style={styles.mainUI}>
      {/* <Login visible={loginBool} onLogin={() => setLoginBool(false)} /> */}
      <Button
        title="Add New Item"
        onPress={() => setAddModalBool(!addModalBool)}
      />

      <NewFileAddition
        visible={addModalBool}
        onCancel={() => setAddModalBool(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainUI: {
    padding: 50,
  },
});

/*This is an example of Image Picker in React Native*/
