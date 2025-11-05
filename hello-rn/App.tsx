import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Pressable } from 'react-native';

const avatar = './assets/profile icon.jpg'

export default function App() {
  return (
    <ScrollView>
         <View style={styles.container}>
      <image source= {{uri:avatar}}></image>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>

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
