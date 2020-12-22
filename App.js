import React from 'react';
import { StyleSheet, SafeAreaView, Alert, Button, StatusBar, Platform } from 'react-native';

// View -> UI View
export default function App() {
  
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
      color="black"
      title="Click Me" 
      onPress={() => Alert .prompt("My title", "My message", text => alert(text))}/>
      {/* .alert("My title", "My message", [
        { text: "Yes", onPress: () => alert("Yes") },
        { text: "No", onPress: () => alert("No") },
      ])}/> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
