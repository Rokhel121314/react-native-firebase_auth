import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useAuthentication = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const registerUser = (email, password) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log("user", user);
        }
      );
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("Email address is already in use!");
      }
      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }
      console.log(error.message);
    }
  };

  const loginUser = (email, password) => {
    try {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          setIsLogin(true);
          console.log("user", user.email);
          setLoading(false);
        }
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false);
    }
  };

  const logoutUser = () => {
    try {
      signOut(auth).then(() => {
        setIsLogin(false);
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const verifyUserLoggedIn = () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.navigate("Home");
          console.log("email", user.email);
        } else {
          navigation.navigate("Login");
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getUserData = () => {
    const user = auth.currentUser;
    if (user) {
      console.log("user", user.email);
    } else {
      console.log("not user");
    }
  };

  return {
    isLogin,
    loading,
    registerUser,
    loginUser,
    logoutUser,
    verifyUserLoggedIn,
  };
};
