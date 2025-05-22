import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "./contexts/ui/ThemeContext";
import { ScreenDimensionsProvider } from "./contexts/ui/screenDimentionsContext";
import AppLoading from "expo-app-loading";
import loadFonts from "./src/utils/loadFonts";

import Routes from "./src/routes/Routes";
import { useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <ScreenDimensionsProvider>
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="rgba(246, 71, 131, 0.3)"/>
          <Routes />
        </SafeAreaView>
      </ThemeProvider>
    </ScreenDimensionsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
