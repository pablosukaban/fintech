import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Page = () => {
  const [countryNumber, setCountryNumber] = useState("+49");
  const [phoneNumber, setPhoneNumber] = useState("");

  const behavior = Platform.OS === "ios" ? "padding" : "height";
  const keyboardVerticalOffset = Platform.OS === "ios" ? 60 : 0;

  const handleSignIn = async () => {};

  return (
    <KeyboardAvoidingView behavior={behavior} keyboardVerticalOffset={keyboardVerticalOffset} style={{ flex: 1 }}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started!</Text>
        <Text style={defaultStyles.descriptionText}>Enter a phone number. We will send you a confirmation code there</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={countryNumber}
            onChangeText={setCountryNumber}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
          />
        </View>
        <Link href={"/login"} asChild replace>
          <TouchableOpacity>
            <Text style={[defaultStyles.textLink, { marginTop: 40 }]}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          onPress={handleSignIn}
          disabled={phoneNumber === ""}
          style={[defaultStyles.pillButton, styles.button, phoneNumber !== "" ? styles.buttonEnabled : styles.buttonDisabled]}
        >
          <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
    flexDirection: "row",
    gap: 10,
  },
  input: {
    backgroundColor: Colors.lightGray,
    fontSize: 20,
    padding: 20,
    borderRadius: 16,
  },
  button: {
    marginBottom: 40,
  },
  buttonEnabled: {
    backgroundColor: Colors.primary,
  },
  buttonDisabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default Page;
