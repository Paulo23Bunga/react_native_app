import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Index from './src/telas';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Index />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
  },
  borda:{
    borderWidth: 3,
    borderColor: 'red',
    width: '100vw',
  }
});
