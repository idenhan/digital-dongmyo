import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View} from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

// View -> UI View
export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View 
        sytle={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%"
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
