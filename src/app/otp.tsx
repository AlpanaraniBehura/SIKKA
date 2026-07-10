import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function OTP() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OTP Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "bold",
  },
});