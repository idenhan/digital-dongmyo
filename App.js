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
      alignItems: "center", // secondary
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 400,
        flexShrink: 1, // equal to flex : -1
        height: 100,
      }}/>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100
      }}/>
    </View>
  )
}

