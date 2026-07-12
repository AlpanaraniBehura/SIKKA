import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>👋 Hello, Alpa</Text>

      <Text style={styles.subTitle}>
        Welcome to SIKKA
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 25,
  },

  greeting: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "700",
  },

  subTitle: {
    color: COLORS.gray,
    marginTop: 5,
    fontSize: 16,
  },
});