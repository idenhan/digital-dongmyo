import React from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

// View -> UI View
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
      }}
    >
      <Text style={{
        // fontFamily: 'Courier',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '600',
        color: 'tomato',
        textTransform: 'capitalize',
        textDecorationLine: 'line-through',
        textAlign: 'center',
        lineHeight: 30,
      }}>I love Toggle! This is my first toggle app! Here's some more text.</Text>
    </View>
  );
}
