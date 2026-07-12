import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { COLORS } from "../constants/colors";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert("Please enter a valid OTP");
      return;
    }

   router.replace("/(tabs)/home");
  };

  const handleResend = () => {
    setTimer(30);
    alert("OTP Sent Again");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Verify OTP</Text>

        <Text style={styles.subtitle}>
          Enter the 6-digit code sent to your mobile number
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#777"
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />

        {timer > 0 ? (
          <Text style={styles.timer}>
            Resend OTP in {timer}s
          </Text>
        ) : (
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resend}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleVerify}
      >
        <Text style={styles.buttonText}>
          Verify
        </Text>
      </TouchableOpacity>
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
  },

  subtitle: {
    color: COLORS.gray,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 40,
  },

  input: {
    backgroundColor: COLORS.card,
    color: COLORS.white,
    height: 60,
    borderRadius: 14,
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 10,
  },

  timer: {
    color: COLORS.gray,
    marginTop: 20,
    textAlign: "center",
  },

  resend: {
    color: COLORS.primary,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  button: {
    height: 58,
    backgroundColor: COLORS.primary,
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