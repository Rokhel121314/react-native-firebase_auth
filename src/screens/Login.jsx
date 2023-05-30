import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";
import { useNavigation } from "@react-navigation/native";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const { verifyUserLoggedIn, loginUser } = useAuthentication();
  const { googleSignIn } = useGoogleSignIn();

  useEffect(() => {
    verifyUserLoggedIn();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => loginUser(email, password)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text>Dont have an account? </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.linkText}>Register here</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: "60%",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "green",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: 600,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  linkText: {
    color: "green",
    textDecorationLine: "underline",
  },
});
