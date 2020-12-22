import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View, Alert, Button, StatusBar, Platform } from 'react-native';

// View -> UI View
export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View sytle={{
        backgroundColor: 'dodgerblue',
        width: "50%",
        height: 70
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
