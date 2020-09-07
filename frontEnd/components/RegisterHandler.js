import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import axios from 'axios';

export default function RegisterHandler() {
  const [item, setItem] = useState([]);
  const [logBool, setLogBool] = useState(false);

  useEffect((username, password, email) => {
    if (!logBool) {
      axios
        .post('https://stormy-escarpment-78427.herokuapp.com/users/register', {
          username: {username},
          password: {password},
          email: {email},
        })
        .then((res) => {
          console.log(res.data);
          console.log(res.status);
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
