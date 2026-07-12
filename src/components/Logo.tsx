import { StyleSheet, Text } from "react-native";
import { COLORS } from "../constants/colors";

export default function Logo() {
  return <Text style={styles.logo}>SIKKA</Text>;
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: COLORS.primary,
    letterSpacing: 5,
    textAlign: "center",
  },
});