import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome to SIKKA 🚀</Text>
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

  title: {
    color: COLORS.primary,
    fontSize: 36,
    fontWeight: "bold",
  },

  subtitle: {
    color: COLORS.white,
    fontSize: 18,
    marginTop: 20,
  },
});