import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress?: () => void;
};

export default function ProfileOption({
  icon,
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.left}>
        <Ionicons
          name={icon}
          size={22}
          color={COLORS.primary}
        />

        <Text style={styles.title}>{title}</Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={COLORS.gray}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: COLORS.white,
    fontSize: 16,
    marginLeft: 14,
    fontWeight: "600",
  },
});