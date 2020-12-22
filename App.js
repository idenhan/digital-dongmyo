import React from "react";
import { View } from "react-native";

import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <Screen>
      <Icon 
        name='email'
        size={100}
      />
    </Screen>  
  );
}
