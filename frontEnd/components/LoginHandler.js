import React, { useState, useEffect } from "react";
import { View } from "react-native";
import axios from "axios";

export default function LoginHandler({ username, password }) {
  const [item, setItem] = useState([]);
  const [logBool, setLogBool] = useState(false);

  useEffect(() => {
    if (!logBool) {
      console.log({ username });
      axios
        .post("https://stormy-escarpment-78427.herokuapp.com/users/login", {
          username: { username },
          password: { password },
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
}
