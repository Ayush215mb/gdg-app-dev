import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StartNavigation from "./navigation/StartNavigatoion";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StartNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
