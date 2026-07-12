import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/100?img=12",
          }}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.greeting}>Good Morning 👋</Text>
          <Text style={styles.name}>Alpa</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.bell}>
        <Ionicons
          name="notifications-outline"
          size={26}
          color={COLORS.white}
        />

        <View style={styles.badge}>
          <Text style={styles.badgeText}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 14,
  },

  greeting: {
    color: COLORS.gray,
    fontSize: 15,
  },

  name: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "700",
    marginTop: 2,
  },

  bell: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.card,
    justifyContent: "center",
    alignItems: "center",
  },

  badge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "bold",
  },
});