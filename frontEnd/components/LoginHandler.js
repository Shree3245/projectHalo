import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import axios from 'axios';

export default function LoginHandler() {
  const [item, setItem] = useState([]);
  const [logBool, setLogBool] = useState(false);

  useEffect(() => {
    if (!logBool) {
      axios
        .get('http://127.0.0.1:3000/')
        .then((res) => {
          console.log(res);
          setItem(res.data);
          setLogBool(!logBool);
        })
        .catch((err) => {
          console.log(err);
          console.log(item);
        });
    }
  });
  return <View></View>;
}
