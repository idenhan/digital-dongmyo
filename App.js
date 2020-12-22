import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

// View -> UI View
export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row", // horizontal
      justifyContent: "center", // main
      alignItems: "flex-end" // secondary
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 300
      }}/>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 200
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100
      }}/>
    </View>
  )
}

