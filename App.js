import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Homepage from './Src/Homepage';
import Sem from './Sem/CsdSem';
import CsdSem from './Sem/CsdSem';
import Branch from'./Src/Branch';
import React from 'react';

import Rootnav from './Src/Rootnav';
export default function App() {
  return (
    <Rootnav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
