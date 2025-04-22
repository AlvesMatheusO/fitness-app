import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  CartesianChart,
  Line,
  useChartPressState,
} from "victory-native";
import { Circle } from "@shopify/react-native-skia";
import { useDerivedValue, type SharedValue } from "react-native-reanimated";

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
  time: i,
  heartRate: hr,
  saturation: saturation[i],
  exercisePower: exercisePower[i],
}));

export default function GeneralChart() {

  const { state, isActive } = useChartPressState({
    x: 0,
    y: {
      heartRate: 0,
      saturation: 0,
      exercisePower: 0,
    },
  });

  const currentIndex = useDerivedValue(() => ({
    position: "absolute",
    top: state.y.heartRate.position.value - 70,
    left: state.x.position.value + 10,
    opacity: isActive ? 1 : 0
  }));

  const currentData = useDerivedValue(() => DATA[currentIndex.value]);

  return (
    <View style={styles.container}>
      <CartesianChart
        data={DATA}
        axisOptions={{
            lineWidth: {
              grid: {
                x: 0,
                y: 0,
              },
            },
          }}
        xKey="time"
        yKeys={["heartRate", "saturation", "exercisePower"]}
        chartPressState={state}
      >
        {({ points }) => (
          <>
            <Line points={points.heartRate} color="#F64783" strokeWidth={2} />
            <Line points={points.saturation} color="#82AB6F" strokeWidth={2} />
            <Line points={points.exercisePower} color="#F88837" strokeWidth={2}
            />

            {isActive && (
              <>
                <ToolTip
                  x={state.x.position}
                  y={state.y.heartRate.position}
                  color="red"
                />
                <ToolTip
                  x={state.x.position}
                  y={state.y.saturation.position}
                  color="orange"
                />
                <ToolTip
                  x={state.x.position}
                  y={state.y.exercisePower.position}
                  color="green"
                />
              </>
            )}
          </>
        )}
      </CartesianChart>
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
  return <Circle cx={x} cy={y} r={6} color={color} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})