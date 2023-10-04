import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

class NavbarService {
  logOut = async () => {
    try {
      await signOut(auth);
      console.log("logged out");
    } catch (err) {
      console.error(err);
    }
  };
}

export default NavbarService;
