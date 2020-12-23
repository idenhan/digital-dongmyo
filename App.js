import React, { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";

import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Catergory" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
