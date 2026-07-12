import { StyleSheet, Text, View } from "react-native";

import ActionCard from "../../components/ActionCard";
import BalanceCard from "../../components/BalanceCard";
import Header from "../../components/Header";
import { COLORS } from "../../constants/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <BalanceCard />

      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      <View style={styles.actionContainer}>
        <ActionCard
          title="Send"
          icon="send"
        />

        <ActionCard
          title="Add Money"
          icon="wallet"
        />

        <ActionCard
          title="Scan QR"
          icon="qr-code"
        />

        <ActionCard
          title="Bank"
          icon="business"
        />
      </View>

      <Text style={styles.sectionTitle}>
        Recent Transactions
      </Text>

      <View style={styles.transactionCard}>
        <Text style={styles.emptyText}>
          No transactions yet.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },

  actionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  transactionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
  },

  emptyText: {
    color: COLORS.gray,
    textAlign: "center",
    fontSize: 15,
  },
});