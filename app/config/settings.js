import __DEV__ from "react-native";

import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.200.181:9000/api",
  }, //192.168.200.181.
  staging: {
    apiUrl: "http://192.168.200.181:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.200.181:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
