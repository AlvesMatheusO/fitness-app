import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { CartesianChart, Line, useChartPressState } from "victory-native";

import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  type SharedValue,
} from "react-native-reanimated";

import BorgScaleChart from "../BorgScaleChart/BorgScaleChart";

import BottomSimplified from "./BottomSimplified";

const heartRate = [
  70, 72, 74, 77, 80, 82, 84, 86, 88, 90, 92, 94, 95, 96, 97, 98, 98, 98, 98,
  98, 97, 96, 95, 94, 92, 90, 88, 85, 80, 75,
];
const saturation = [
  98, 98, 98, 97, 97, 97, 96, 96, 80, 89, 88, 85, 84, 83, 82, 60, 93, 93, 93,
  93, 93, 94, 94, 95, 95, 96, 96, 97, 97, 98,
];
const exercisePower = [
  40, 42, 44, 46, 48, 50, 50, 50, 50, 48, 46, 44, 42, 40, 0, 0, 0, 0, 0,
  28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8,
];

const DATA = heartRate.map((hr, i) => ({
  time: i,
  heartRate: hr,
  saturation: saturation[i],
  exercisePower: exercisePower[i],
}));

export default function SimplifiedChart() {
  const { state, isActive } = useChartPressState({
    x: 0,
    y: {
      heartRate: 0,
      saturation: 0,
      exercisePower: 0,
    },
  });

  const currentIndex = useDerivedValue(() => {
    const i = Math.round(state.x.value.value);
    return Math.max(0, Math.min(i, DATA.length - 1));
  });

  const [tooltipData, setTooltipData] = React.useState(DATA[0]);

  //ATUALIZAR OS DADOS VISIVEIS NO TOOLTIP QUANDO O INDEX MUDAR
  useDerivedValue(() => {
    const data = DATA[currentIndex.value];
    runOnJS(setTooltipData)(data);
    return null;
  }, [currentIndex]);

  const tooltipStyle = useAnimatedStyle(() => ({
    position: "absolute",
    top: state.y.heartRate.position.value - 60,
    left: state.x.position.value + 12,
    opacity: isActive ? 1 : 0,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.chartBackground}  pointerEvents="box-none">
        <Text style={styles.title}>Simplificado</Text>
        <View style={styles.chartContainer}>
          {isActive && (
            <>
              <ToolTip
                x={state.x.position}
                y={state.y.heartRate.position}
                color="#F64783"
              />
              <ToolTip
                x={state.x.position}
                y={state.y.saturation.position}
                color="#82AB6F"
              />
              <ToolTip
                x={state.x.position}
                y={state.y.exercisePower.position}
                color="#F88837"
              />

              <Animated.View
                pointerEvents="none"
                style={[styles.tooltipContainer, tooltipStyle]}
              >
                <Text style={styles.tooltipText}>
                  FC: {tooltipData.heartRate} bpm
                </Text>
                <Text style={styles.tooltipText}>
                  Sat: {tooltipData.saturation}%
                </Text>
                <Text style={styles.tooltipText}>
                  Pot: {tooltipData.exercisePower}%
                </Text>
              </Animated.View>
            </>
          )}

          <CartesianChart
            data={DATA}
            xKey="time"
            yKeys={["heartRate", "saturation", "exercisePower"]}
            chartPressState={state}
            xAxis={{
              lineWidth: 0,
              tickCount: 0,
              labelColor: "transparent",
            }}
            yAxis={[
              {
                yKeys: ["heartRate", "saturation", "exercisePower"],
                lineWidth: 0,
                tickCount: 0,
                labelColor: "transparent",
              },
            ]}
            frame={{
              lineWidth: 0,
            }}
          >
            {({ points }) => (
              <>
                <Line
                  points={points.heartRate}
                  color="#F64783"
                  strokeWidth={2}
                />
                <Line
                  points={points.saturation}
                  color="#82AB6F"
                  strokeWidth={2}
                />
                <Line
                  points={points.exercisePower}
                  color="#F88837"
                  strokeWidth={2}
                />
              </>
            )}
          </CartesianChart>

          <View style={{ padding: 15, paddingHorizontal: 25 }}>
            <BorgScaleChart values={[2, 3, 8, 10]} />
          </View>
        </View>
      </View>
      <BottomSimplified />
    </View>
  );
}
function ToolTip({
  x,
  y,
  color,
}: {
  x: SharedValue<number>;
  y: SharedValue<number>;
  color: string;
}) {
  const style = useAnimatedStyle(() => ({
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: color,
    left: x.value - 4,
    top: y.value - 4,
  }));

  return <Animated.View style={style} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  chartBackground: {
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
    height: 290,
    borderRadius: 24,
  },

  title: {
    fontSize: 20,
    fontFamily: "subtitle",
    marginBottom: 16,
    padding: 16,
    color: "black",
  },

  chartContainer: {
    // padding: 30,
    height: 200,
    position: "relative",
    backgroundColor: "#FFF",
  },

  tooltipContainer: {
    backgroundColor: "rgba(246, 71, 131, 0.3)",
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    position: "absolute",
    zIndex: 1,
  },
  tooltipText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
});
