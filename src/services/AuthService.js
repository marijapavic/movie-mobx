import { db, auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

class AuthService {
  registerUser = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: name,
        email: email,
      });
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    } catch (err) {
      console.error(err);
    }
  };

  signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("logged in");
    } catch (err) {
      console.error(err);
    }
  };
}

export default AuthService;
