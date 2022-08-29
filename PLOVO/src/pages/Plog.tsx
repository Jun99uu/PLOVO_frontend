import { StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header/Header";
import PlogLayout from "../components/Plog/PlogLayout";

export default function Plog() {
  return (
    <LinearGradient
      colors={["#277BC0", "#53BF9D", "#A0B956"]}
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
      style={styles.container}
    >
      <Header title="PLOGGING" />
      <PlogLayout />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
