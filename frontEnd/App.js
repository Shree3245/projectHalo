import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import NewFileAddition from './components/NewFileAddition';
import Tpe from './components/tpe';
export default function App() {
  const [items, setItems] = useState([]);
  const [addModalBool, setAddModalBool] = useState(false);

  return (
    <View style={styles.mainUI}>
      <Button
        title="Add New Item"
        onPress={() => setAddModalBool(!addModalBool)}
      />
      <Tpe />
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
