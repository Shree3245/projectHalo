import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function Tpe() {
  const handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, (Response) => {
      console.log('response', Response);
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
}
