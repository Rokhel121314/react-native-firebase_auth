import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useAuthentication } from "../hooks/useAuthentication";

const Home = () => {
  const { logoutUser, loading } = useAuthentication();

  if (loading) {
    return <ActivityIndicator color={"black"} size={"large"} />;
  }
  return (
    <View style={styles.container}>
      <Text>HOME PAGE</Text>
      <TouchableOpacity style={styles.button} onPress={() => logoutUser()}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
  },
});
