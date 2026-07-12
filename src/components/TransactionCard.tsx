import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

type Props = {
  title: string;
  subtitle: string;
  amount: string;
  type: "credit" | "debit";
  icon: keyof typeof Ionicons.glyphMap;
};

export default function TransactionCard({
  title,
  subtitle,
  amount,
  type,
  icon,
}: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon}
          size={22}
          color={COLORS.primary}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Text
        style={[
          styles.amount,
          {
            color:
              type === "credit"
                ? "#22C55E"
                : "#EF4444",
          },
        ]}
      >
        {amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1F2937",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  info: {
    flex: 1,
  },

  title: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },

  subtitle: {
    color: COLORS.gray,
    fontSize: 13,
    marginTop: 3,
  },

  amount: {
    fontSize: 16,
    fontWeight: "700",
  },
});