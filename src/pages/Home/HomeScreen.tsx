import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { ThemeContext } from "../../../contexts/ui/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";
import SimplifiedChart from "../../components/charts/SimplifiedChart/SimplifiedMain";
import BottomSimplified from "../../components/charts/SimplifiedChart/BottomSimplified";
export default function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;


  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      {/* <View style={styles.chart1}>
        <SimplifiedChart />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  chart1: {
    padding: 12,
    borderRadius: 24,
  },
});
