import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Logo from "../components/Logo";
import { COLORS } from "../constants/colors";

export default function Login() {
  const [mobile, setMobile] = useState("");

  const handleContinue = () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    router.push("/otp");
  };

  return (
    <View style={styles.container}>
      <View>
        <Logo />

        <Text style={styles.title}>Welcome</Text>

        <Text style={styles.subtitle}>
          Enter your mobile number to continue
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="call-outline"
            size={22}
            color={COLORS.primary}
          />

          <Text style={styles.countryCode}>+91</Text>

          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#777"
            keyboardType="number-pad"
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
          />
        </View>
      </View>

      <View>
        <Text style={styles.footerText}>
          By continuing you agree to our{" "}
          <Text style={styles.link}>Terms & Conditions</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 40,
  },

  title: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "700",
    marginTop: 60,
    marginBottom: 8,
  },

  subtitle: {
    color: COLORS.gray,
    fontSize: 16,
    marginBottom: 35,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 60,
  },

  countryCode: {
    color: COLORS.white,
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: "600",
  },

  input: {
    flex: 1,
    color: COLORS.white,
    fontSize: 18,
  },

  footerText: {
    color: COLORS.gray,
    textAlign: "center",
    fontSize: 13,
    marginBottom: 20,
    lineHeight: 20,
  },

  link: {
    color: COLORS.primary,
    fontWeight: "600",
  },

  button: {
    backgroundColor: COLORS.primary,
    height: 58,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});