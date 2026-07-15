import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function WalletBalanceCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Wallet Balance</Text>

      <Text style={styles.balance}>₹25,480.50</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons
            name="add"
            size={20}
            color="#000"
          />
          <Text style={styles.addText}>
            Add Money
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.withdrawButton}>
          <Ionicons
            name="arrow-up"
            size={18}
            color="#fff"
          />
          <Text style={styles.withdrawText}>
            Withdraw
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 22,
    padding: 24,
    marginBottom: 30,
  },

  label: {
    color: "#222",
    fontSize: 16,
    fontWeight: "600",
  },

  balance: {
    color: "#000",
    fontSize: 38,
    fontWeight: "bold",
    marginVertical: 20,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 30,
  },

  addText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "700",
  },

  withdrawButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F2937",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 30,
  },

  withdrawText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "700",
  },
});