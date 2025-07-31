import React, { useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  ImageBackground,
} from "react-native";

import { ThemeContext } from "../../../contexts/ui/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";
import SimplifiedChart from "../../components/charts/SimplifiedChart/SimplifiedChart";

export default function DetailsScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const isDark = theme === "dark";
  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <View style={{ padding: 12 }}>
        <SimplifiedChart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
