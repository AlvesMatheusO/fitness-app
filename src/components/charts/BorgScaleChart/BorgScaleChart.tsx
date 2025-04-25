import React, { useState } from "react";
import { View, Text, StyleSheet, LayoutChangeEvent } from "react-native";

interface BorgScaleChartProps {
  values: number[];
}

export default function BorgScaleChart({ values }: BorgScaleChartProps) {
  const [width, setWidth] = useState(0);

  const handleLayout = (e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
  };

  const colorForValue = (v: number) => {
    if (v <= 4) return "#BAE5B3";
    if (v <= 7) return "#F9F59D";
    return "#FF958F";
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.line} />
      {width > 0 &&
        values.map((v, i) => {
          const left =
            values.length > 1 ? (i / (values.length - 1)) * width : width / 2;

          return (
            <View
              key={i}
              style={[
                styles.circle,
                { left, backgroundColor: colorForValue(v) },
              ]}
            >
              <Text style={styles.text}>{v}</Text>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },

  line: {
    position: "absolute",
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
  },

  circle: {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "black",
    fontSize: 12,
  },
});
