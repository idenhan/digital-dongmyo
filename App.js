import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

// View -> UI View
export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 2,
      }}/>
      <View style={{
        backgroundColor: "gold",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "tomato",
        flex: 1,
      }}/>
    </View>
  )
}

