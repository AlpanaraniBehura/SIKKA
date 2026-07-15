import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Header from "../../components/Header";
import ProfileOption from "../../components/ProfileOption";
import { COLORS } from "../../constants/colors";

export default function Profile() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Header
        title="👤 Profile"
        subtitle="Manage your account"
      />

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>

        <Text style={styles.name}>Alpa Behura</Text>

        <Text style={styles.mobile}>+91 9876543210</Text>

        <View style={styles.kycBadge}>
          <Text style={styles.kycText}>KYC Verified ✅</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Account</Text>

      <ProfileOption icon="person-outline" title="Personal Information" />
      <ProfileOption icon="card-outline" title="Linked Bank Accounts" />
      <ProfileOption icon="shield-checkmark-outline" title="Security & Privacy" />
      <ProfileOption icon="settings-outline" title="Settings" />
      <ProfileOption icon="help-circle-outline" title="Help & Support" />

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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

  profileCard: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    alignItems: "center",
    padding: 24,
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  avatarText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },

  name: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "700",
  },

  mobile: {
    color: COLORS.gray,
    fontSize: 16,
    marginTop: 6,
  },

  kycBadge: {
    marginTop: 18,
    backgroundColor: "#1F2937",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },

  kycText: {
    color: "#22C55E",
    fontWeight: "700",
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },

  logoutButton: {
    backgroundColor: "#EF4444",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },

  logoutText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
});