import React from 'react';
import { StyleSheet, SafeAreaView, Alert, Button } from 'react-native';

// View -> UI View
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="orange"
      title="Click Me" 
      onPress={() => Alert .prompt("My title", "My message", text => alert(text))}/>
      {/* .alert("My title", "My message", [
        { text: "Yes", onPress: () => alert("Yes") },
        { text: "No", onPress: () => alert("No") },
      ])}/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
});
