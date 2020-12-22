import React from "react";
import { View } from "react-native";

import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    // <AccountScreen />
    <WelcomeScreen />
  );
}

// "husky": {
//   "hooks": {
//     "pre-commit": "yarn run lint"
//   }
// },
