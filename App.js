import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// View -> UI View
export default function App() {
  const handlePress = () => {
    console.log("Text Pressed");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello, Toggle! - A really really long text. Now I wanna make this even longer and see what happens.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue'
  },
});
