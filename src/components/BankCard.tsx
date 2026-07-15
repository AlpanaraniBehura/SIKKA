import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function BankCard() {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="business"
            size={28}
            color={COLORS.primary}
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.bankName}>
            HDFC Bank
          </Text>

          <Text style={styles.account}>
            **** **** **** 4587
          </Text>
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={22}
        color={COLORS.gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 18,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1F2937",
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    marginLeft: 14,
  },

  bankName: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "700",
  },

  account: {
    color: COLORS.gray,
    marginTop: 4,
    fontSize: 14,
  },
});