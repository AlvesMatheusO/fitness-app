import { View, Text, StyleSheet, Image } from "react-native";

export default function BottomSimplified() {
  return (
    <View style={styles.bottomRow}>
      <View style={{ alignItems: "center" }}>
        {/* <Saturation /> */}
        <Image style={{  width: 19, height: 24, }} source={require("../../../../assets/icon/saturation.png")}/>
        <Text style={styles.number}>91</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        {/* <Heart /> */}
        <Image style={{ width: 27.29,  height: 27.29 }} source={require("../../../../assets/icon/heart.png")}/>
        <Text style={styles.number}>26</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        {/* <Power /> */}
        <Image style={{ width: 22.96,  height: 19.51,  }} source={require("../../../../assets/icon/potencia.png")}/>
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

  number: {
    padding: 2,
    fontSize: 18,
  },
});
