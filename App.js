import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image, SafeAreaView } from 'react-native';

// View -> UI View
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, Toggle!</Text>
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image 
          source={{ 
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300" 
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center"
  },
});
