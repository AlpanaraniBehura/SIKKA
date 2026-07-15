import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
};

export default function RewardCard({
  icon,
  title,
  value,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon}
          size={28}
          color={COLORS.primary}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#1F2937",
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    marginLeft: 16,
  },

  title: {
    color: COLORS.gray,
    fontSize: 14,
  },

  value: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "700",
    marginTop: 4,
  },
});