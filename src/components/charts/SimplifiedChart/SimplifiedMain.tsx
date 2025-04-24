import { useContext } from "react";
import { View, Text as RNText, StyleSheet } from "react-native";

import SimplifiedChart from "./SimplifiedChart";
import BorgScaleChart from "../BorgScaleChart/BorgScaleChart";

export default function SimplifiedMain() {
  return (
    <View>
      <SimplifiedChart />
    </View>
  );
}

const styles = StyleSheet.create({});
