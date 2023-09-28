import { db, auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { makeAutoObservable } from "mobx";
import { AuthStore } from "../store/AuthStore";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  registerUser = async () => {
    if (!AuthStore.isValid) {
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        AuthStore.email,
        AuthStore.password
      );
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: AuthStore.name,
        email: AuthStore.email,
      });
      await updateProfile(auth.currentUser, { displayName: AuthStore.name });
      console.log(AuthStore.name);
    } catch (err) {
      console.error(err);
    }
  };

  signIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        AuthStore.email,
        AuthStore.password
      );
      AuthStore.setEmail("");
      AuthStore.setPassword("");
      console.log("logged in");
    } catch (err) {
      console.error(err);
    }
  };

  validateName = () => {
    if (AuthStore.name.trim() === "") {
      AuthStore.nameError = "Name is required";
    } else {
      AuthStore.nameError = "";
    }
  };

  validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (AuthStore.email.trim() === "") {
      AuthStore.emailError = "Email is required";
    } else if (!emailRegex.test(AuthStore.email)) {
      AuthStore.emailError = "Invalid email";
    } else {
      AuthStore.emailError = "";
    }
  };

  validatePassword = () => {
    const passwordRegex = /.{8,}/;
    if (AuthStore.password.trim() === "") {
      AuthStore.passwordError = "Password is required";
    } else if (!passwordRegex.test(AuthStore.password)) {
      AuthStore.passwordError = "Invalid password";
    } else {
      AuthStore.passwordError = "";
    }
  };
}

export const AuthService = new Store();
