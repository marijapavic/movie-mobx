import { auth } from "../config/firebase";
import { action, makeObservable } from "mobx";
import { signOut } from "firebase/auth";

class Store {
  constructor() {
    makeObservable(this, {
      logOut: action,
    });
  }

  logOut = async () => {
    try {
      await signOut(auth);
      console.log("logged out");
    } catch (err) {
      console.error(err);
    }
  };
}

export const NavbarService = new Store();
