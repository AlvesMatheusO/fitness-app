import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

// Pages:
import HomeScreen from "../pages/Home/HomeScreen";
import SettingsScreen from "../pages/Settings/SettingsScreen";

import { ThemeContext } from "../../contexts/ui/ThemeContext";
import { lightTheme, darkTheme } from "../../src/theme/theme";


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute", backgroundColor:  currentTheme.background},
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
