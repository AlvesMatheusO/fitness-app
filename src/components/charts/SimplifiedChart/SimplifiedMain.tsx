import { useContext } from "react";
import { View, Text as RNText, StyleSheet } from "react-native";

import SimplifiedChart from "./SimplifiedChart";
import BottomSimplified from "./BottomSimplified";

export default function SimplifiedMain() {
  return (
    <View pointerEvents="box-none" style={{ flex: 1 }}>
      <SimplifiedChart />
    </View>
  );
}

const styles = StyleSheet.create({});
