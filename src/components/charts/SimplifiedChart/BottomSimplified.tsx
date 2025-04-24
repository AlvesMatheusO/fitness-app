import { View, Text, StyleSheet } from "react-native";

import Heart from "../../../../assets/icon/heart.svg";
import Saturation from "../../../../assets/icon/saturation.svg";
import Power from "../../../../assets/icon/power.svg";

export default function BottomSimplified() {
  return (
    <View style={styles.bottomRow}>
      <View style={{ alignItems: "center" }}>
        <Saturation />
        <Text style={styles.number}>91</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Heart />
        <Text style={styles.number}>26</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Power />
        <Text style={styles.number}>40</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomRow: {
    flexDirection: "row",
    marginTop: 7,
    justifyContent: "space-evenly",
    height: 70,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 24,
    alignItems: "center",
  },

  icon: {
    width: 33,
    height: 31,
  },

  number: {
    padding: 2,
    fontSize: 18,
  },
});
