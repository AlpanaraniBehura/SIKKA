import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function Header({
  title = "👋 Hello, Alpa",
  subtitle = "Welcome to SIKKA",
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{title}</Text>

      <Text style={styles.subTitle}>
        {subtitle}
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