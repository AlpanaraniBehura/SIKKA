import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function BalanceCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Available Balance</Text>

      <Text style={styles.amount}>₹0.00</Text>

      <Text style={styles.note}>
        Start using SIKKA to manage your money.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 20,
    marginBottom: 30,
  },

  label: {
    color: COLORS.gray,
    fontSize: 16,
  },

  amount: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 10,
  },

  note: {
    color: COLORS.gray,
    marginTop: 12,
    fontSize: 14,
  },
});