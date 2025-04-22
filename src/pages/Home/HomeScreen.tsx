import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { ThemeContext } from "../../../contexts/ui/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";
import ChartVictory from "../../components/charts/ChartVictory";
import GeneralChart from "../../components/charts/GeneralChart";

export default function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <View style={styles.chart1}>
        <Text style={styles.title}>
          Simplificado
        </Text>
        {/* <ChartVictory />*/}
        <GeneralChart /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  chart1: {
    height: 300,
    backgroundColor: "#E0F0E4",
    padding: 8,
    borderRadius: 24
  },

  title: {
    fontSize: 20,
    fontWeight: "thin",
    marginBottom: 16,
    padding: 16,
    color: 'black'
  },
});
