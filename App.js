import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import AppLoading from "expo-app-loading";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import logger from "./app/utility/logger";

logger.start();

export default function App() {
  const [user, setUser] = useState();
  // const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  /* useEffect 대신해 비동기로 처리하고자 하는데, Splash Screen에서 더 넘어가지 않는 이슈 발생*/
  // if (!isReady)
  //   return (
  //     <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
  //   );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
