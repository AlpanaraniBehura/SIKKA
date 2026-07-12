import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";

export default function Rewards() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rewards Screen</Text>
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
    fontSize: 24,
    fontWeight: "bold",
  },
});