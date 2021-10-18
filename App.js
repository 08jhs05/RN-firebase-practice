import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FoodList from './src/FoodList';
import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

export default function App() {

  const [text, onChangeText] = useState('');

  const firebaseConfig = {
    apiKey: "AIzaSyAL9heY2h4vyPLU-lL5EKbjuKJ-DA-lG0s",
    authDomain: "reactnative-practice-e0f72.firebaseapp.com",
    databaseURL: "https://reactnative-practice-e0f72-default-rtdb.firebaseio.com",
    projectId: "reactnative-practice-e0f72",
    storageBucket: "reactnative-practice-e0f72.appspot.com",
    messagingSenderId: "780719410338",
    appId: "1:780719410338:web:fbda50f172f49c6e6e9bfb"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
  const database = firebase.database();

  const onBtnClick = () => {

    database
    .ref("items/"+text)
    .set({
      dataname: text
    });

    console.log(text);
    onChangeText('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text>firebase tests</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          />
        <FoodList onclick={onBtnClick}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, textBox: {
    padding: 20,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    borderRadius: 20,
    width: '80%'
  },input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
