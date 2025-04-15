import React, { useContext } from "react";

import { View, Text, StyleSheet, Image, Switch } from "react-native";

import { ThemeContext } from "../../../contexts/ui/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";

export default function SettingsScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const isDark = theme === "dark";
  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <View>
        <View>
          <Image
            source={require("../../../assets/icon/jotaro.jpg")}
            style={styles.profile}
          />
          <Text style={[styles.profileName, { color: currentTheme.text }]}>
            Jotaro Joestar
          </Text>
        </View>

        <View>
          <View style={styles.rowLine}>
            <Text style={[ styles.text, { color: currentTheme.text } ]}>Dark mode</Text>
            <Switch value={isDark} onValueChange={toggleTheme} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },

  profile: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  
  text: {
    fontSize: 16,
  },

  profileName: {
    fontSize: 20,
  },

  rowLine: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: "row",
  },
});
