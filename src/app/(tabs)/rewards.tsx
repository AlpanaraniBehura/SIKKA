import { ScrollView, StyleSheet, Text, View } from "react-native";

import Header from "../../components/Header";
import RewardCard from "../../components/RewardCard";
import { COLORS } from "../../constants/colors";

export default function Rewards() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Header
        title="🎁 Rewards"
        subtitle="Earn more with every transaction"
      />

      <RewardCard
        icon="star"
        title="Total Reward Points"
        value="12,450 Points"
      />

      <RewardCard
        icon="cash"
        title="Cashback Earned"
        value="₹2,850"
      />

      <RewardCard
        icon="gift"
        title="Scratch Cards"
        value="3 Available"
      />

      <RewardCard
        icon="flame"
        title="Daily Streak"
        value="7 Days"
      />

      <Text style={styles.sectionTitle}>
        Achievements
      </Text>

      <View style={styles.achievementCard}>
        <Text style={styles.achievement}>🏆 First Payment Completed</Text>
        <Text style={styles.achievement}>🏦 Bank Account Linked</Text>
        <Text style={styles.achievement}>👥 Invited First Friend</Text>
        <Text style={styles.achievement}>💳 Wallet Activated</Text>
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
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 16,
  },

  achievementCard: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 20,
  },

  achievement: {
    color: COLORS.white,
    fontSize: 16,
    marginBottom: 14,
  },
});