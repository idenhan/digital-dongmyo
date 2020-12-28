import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Button } from "react-native";

export default function App() {
  const netInfo = useNetInfo();

  return <Button disalbed={!netInfo.isInternetReachable} />;
}

// import { NavigationContainer } from "@react-navigation/native";

// import navigationTheme from "./app/navigation/navigationTheme";
// import AppNavigator from "./app/navigation/AppNavigator";

// export default function App() {
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }
