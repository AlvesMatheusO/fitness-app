import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../../contexts/ui/ThemeContext";
import { lightTheme, darkTheme } from "../../src/theme/theme";

// Pages:
import HomeScreen from "../pages/Home/HomeScreen";
import SettingsScreen from "../pages/Settings/SettingsScreen";

import HomeIcon from "../../assets/icon/Home.svg";
import SettingsIcon from "../../assets/icon/Settings.svg";

import HomeUnfocused from "../../assets/icon/HomeUnfocused.svg";
import SettingsFocused from "../../assets/icon/SettingsFocused.svg";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={({ state, descriptors, navigation }) => (
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={[
                styles.tabButton,
                { flex: isFocused ? 1.5 : 1 }, 
                isFocused ? styles.focusedTab : styles.unfocusedTab,
              ]}
            >
             { route.name === "Home" ? (
              isFocused ? (
                <HomeIcon width={24} height={24}/>
              ) : (
                <HomeUnfocused width={24} height={24} />
              )
             ) : (
              isFocused ? (
                <SettingsFocused width={24} height={24} />
              ) : (
                <SettingsIcon width={24} height={24} />
              )
             ) }
            </TouchableOpacity>
          );
        })}
      </View>
    )}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "#1E1E1E",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 180,
    height: 60,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  tabButton: {
    flex: 1,
    height: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  focusedTab: {
    backgroundColor: "#F64783",
  },

  unfocusedTab: {
    backgroundColor: "#1E1E1E",
  },
});
