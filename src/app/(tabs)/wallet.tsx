import { ScrollView, StyleSheet, Text, View } from "react-native";

import BankCard from "../../components/BankCard";
import Header from "../../components/Header";
import TransactionCard from "../../components/TransactionCard";
import WalletBalanceCard from "../../components/WalletBalanceCard";
import { COLORS } from "../../constants/colors";

export default function Wallet() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
       <Header
        title="💳 Wallet"
        subtitle="Manage your money"
       />

      <WalletBalanceCard />

      <Text style={styles.sectionTitle}>
        Linked Bank
      </Text>

      <BankCard />

      <Text style={styles.sectionTitle}>
        Wallet Activity
      </Text>

      <View style={styles.transactionCard}>
        <TransactionCard
          title="Added Money"
          subtitle="Today • 09:30 AM"
          amount="+ ₹5,000"
          type="credit"
          icon="add-circle-outline"
        />

        <View style={styles.divider} />

        <TransactionCard
          title="Transfer to Rahul"
          subtitle="Yesterday"
          amount="- ₹1,200"
          type="debit"
          icon="send-outline"
        />

        <View style={styles.divider} />

        <TransactionCard
          title="Cashback Reward"
          subtitle="2 days ago"
          amount="+ ₹120"
          type="credit"
          icon="gift-outline"
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

  transactionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  divider: {
    height: 1,
    backgroundColor: "#1F2937",
  },
});