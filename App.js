import React from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText';

// View -> UI View
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText>안녕하세요, 토글 여보</AppText>
    </View>
  );
}
