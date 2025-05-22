import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

import { ThemeContext } from "../../../contexts/ui/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";
import TopbarBackground from "../../../assets/topBackground.svg";

import Clock from "../../../assets/icon/clock.svg";
import Add from "../../../assets/icon/add.svg";

export default function HomeScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const { width } = Dimensions.get("window");

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <TopbarBackground
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height * 0.3}
        style={[
          styles.topBackground,
          {
            padding: 0,
            margin: 0,
            borderWidth: 0,
          },
        ]}
      />

      <View>
        <View>
          <Text style={styles.textLast}>Último Treino</Text>
          <View style={styles.line} />
        </View>

        <View
          style={[
            styles.lastTraining,
            { backgroundColor: currentTheme.subBackground },
          ]}
        >
          <Image
            source={require("../../../assets/training.png")}
            style={{ height: "100%", borderRadius: 15, zIndex: 1 }}
          />

          <View>
            <Text style={styles.lastTrainingTitle}> Musculação </Text>
            <Text style={styles.lastTrainingSub}>Costas e Biceps</Text>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Clock />
              <Text style={styles.time}>2h30min</Text>
            </View>

            <View style={styles.bottomCard}>
              <Text>Sexta</Text>
              <Text>12/10/2025</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{ paddingTop: 10 }}>
            <TouchableOpacity style={styles.btn}>
              <Add />
            </TouchableOpacity>
          </View>
          <Text style={styles.month}>Maio</Text>

          <TouchableOpacity>
            <View style={styles.eachLog}>
              <Text style={[styles.lastTrainingTitle, { paddingTop: 8 }]}>
                Natação
              </Text>
              <Text style={[styles.lastTrainingSub, { fontSize: 14 }]}>
                Nado Sincronizado
              </Text>

              <View style={styles.bottomEach}>
                <View style={styles.clockEach}>
                  <Clock />
                  <Text style={styles.time}>2h30min</Text>
                </View>
                <Text style={styles.time}>12/10/2025</Text>
              </View>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  topBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },

  textLast: {
    paddingTop: 43,
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 20,
    marginLeft: 20,
  },

  month: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    paddingBottom: 15,
  },

  line: {
    width: "100%",
    height: 2,
    backgroundColor: "#FFF",
  },

  lastTraining: {
    marginTop: 20,
    height: "33%",
    borderRadius: 15,
    flexDirection: "row",
    overflow: 'hidden', 
  },

  lastTrainingTitle: {
    color: "#F64783",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 14,
  },

  lastTrainingSub: {
    color: "#FFF",
    fontSize: 18,
    paddingLeft: 14,
    paddingVertical: 15,
    fontWeight: "light",
  },
  time: {
    color: "#FFF",
    fontSize: 14,
    paddingLeft: 14,
  },
  bottomCard: {
    paddingTop: 5,
    flexDirection: "row",
    backgroundColor: "#F64783",
    borderRadius: 15,
    borderBottomStartRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 5,
  },

  eachLog: {
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    borderTopLeftRadius: 0,
  },
  bottomEach: {
    paddingTop: 5,
    flexDirection: "row",
    backgroundColor: "#F64783",
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 5,
  },
  clockEach: {
    flexDirection: "row",
    alignItems: "center",
  },

  btn: {
    backgroundColor: "#F64783",
    height: 40,
    width: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 50,
  },
});
