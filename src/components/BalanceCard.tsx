import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { COLORS } from "../constants/colors";

export default function BalanceCard() {
  const [hidden, setHidden] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Available Balance</Text>

        <TouchableOpacity
          onPress={() => setHidden(!hidden)}
        >
          <Ionicons
            name={hidden ? "eye-off" : "eye"}
            size={22}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.amount}>
        {hidden ? "₹ ••••••" : "₹25,480.50"}
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          + Add Money
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F5A623",
    borderRadius: 22,
    padding: 24,
    marginBottom: 30,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },

  amount: {
    fontSize: 36,
    color: "#000",
    fontWeight: "bold",
    marginVertical: 20,
  },

  button: {
    alignSelf: "flex-start",
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});