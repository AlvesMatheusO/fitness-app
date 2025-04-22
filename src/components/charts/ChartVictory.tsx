import { useContext } from "react";
import { View, Text as RNText, StyleSheet } from "react-native";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { ThemeContext } from "../../../contexts/ui/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";

// Dados simulados
const heartRate = [
  70, 72, 74, 77, 80, 82, 84, 86, 88, 90, 92, 94, 95, 96, 97, 98, 98, 98, 98,
  98, 97, 96, 95, 94, 92, 90, 88, 85, 80, 75,
];
const saturation = [
  98, 98, 98, 97, 97, 97, 96, 96, 96, 95, 95, 95, 95, 94, 94, 94, 93, 93, 93,
  93, 93, 94, 94, 95, 95, 96, 96, 97, 97, 98,
];
const exercisePower = [
  40, 42, 44, 46, 48, 50, 50, 50, 50, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30,
  28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8,
];

const DATA = heartRate.map((hr, i) => ({
  x: i + 1,
  heartRate: hr,
  saturation: saturation[i],
  exercisePower: exercisePower[i],
}));

export default function ChartVictory() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const { state: chartPressState, isActive } = useChartPressState({
    x: 0,
    y: {
      heartRate: 0,
      saturation: 0,
      exercisePower: 0,
    },
  });

  // Index do ponto selecionado
  const currentIndex = useDerivedValue(() => {
    const i = Math.round(chartPressState.x.value.value) - 1;
    return Math.max(0, Math.min(i, DATA.length - 1));
  });

  const currentData = useDerivedValue(() => DATA[currentIndex.value]);

  // Estilo do tooltip
  const tooltipStyle = useAnimatedStyle(() => ({
    position: "absolute",
    left: chartPressState.x.position.value + 12,
    top: chartPressState.y.heartRate.position.value - 50,
    opacity: isActive ? 1 : 0,
  }));

  // Estilos dos marcadores fixos (bolinhas)
  const heartMarkerStyle = useAnimatedStyle(() => ({
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#F64783",
    left: chartPressState.x.position.value - 4,
    top: chartPressState.y.heartRate.position.value - 2,
    opacity: isActive ? 1 : 0,
  }));

  const satMarkerStyle = useAnimatedStyle(() => ({
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#F88837",
    left: chartPressState.x.position.value - 4,
    top: chartPressState.y.saturation.position.value - 2,
    opacity: isActive ? 1 : 0,
  }));

  const powerMarkerStyle = useAnimatedStyle(() => ({
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#82AB6F",
    left: chartPressState.x.position.value - 4,
    top: chartPressState.y.exercisePower.position.value - 2,
    opacity: isActive ? 1 : 0,
  }));

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <CartesianChart
        data={DATA}
        xKey="x"
        yKeys={["saturation", "heartRate", "exercisePower"]}
        chartPressState={chartPressState}
      >
        {({ points }) => (
          <>
            <Line points={points.saturation} color="#F88837" strokeWidth={2} />
            <Line points={points.heartRate} color="#F64783" strokeWidth={2} />
            <Line
              points={points.exercisePower}
              color="#82AB6F"
              strokeWidth={2}
            />
          </>
        )}
      </CartesianChart>

      {isActive && (
        <>
          <Animated.View style={heartMarkerStyle} />
          <Animated.View style={satMarkerStyle} />
          <Animated.View style={powerMarkerStyle} />

          <Animated.View style={tooltipStyle}>
            <View style={styles.tooltipContainer}>
              <RNText style={styles.tooltipText}>
                Min: {currentData.value?.x}
              </RNText>
              <RNText style={styles.tooltipText}>
                FC: {currentData.value?.heartRate} bpm
              </RNText>
              <RNText style={styles.tooltipText}>
                Sat: {currentData.value?.saturation}%
              </RNText>
              <RNText style={styles.tooltipText}>
                Pot: {currentData.value?.exercisePower}
              </RNText>
            </View>
          </Animated.View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  tooltipText: { color: "#000", fontSize: 12, fontWeight: "bold" },
  tooltipContainer: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowColor: "#000",
    elevation: 3,
  },
});
