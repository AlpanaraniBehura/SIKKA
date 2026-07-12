import { ScrollView, StyleSheet, Text, View } from "react-native";

import ActionCard from "../../components/ActionCard";
import BalanceCard from "../../components/BalanceCard";
import Header from "../../components/Header";
import TransactionCard from "../../components/TransactionCard";
import { COLORS } from "../../constants/colors";

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
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
        <TransactionCard
          title="Amazon"
          subtitle="Today • 10:45 AM"
          amount="- ₹899"
          type="debit"
          icon="cart-outline"
        />

        <View style={styles.divider} />

        <TransactionCard
          title="Salary"
          subtitle="Yesterday"
          amount="+ ₹45,000"
          type="credit"
          icon="cash-outline"
        />

        <View style={styles.divider} />

        <TransactionCard
          title="Coffee"
          subtitle="Yesterday"
          amount="- ₹120"
          type="debit"
          icon="cafe-outline"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  content: {
    paddingBottom: 40,
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
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 30,
  },

  divider: {
    height: 1,
    backgroundColor: "#1F2937",
  },
});