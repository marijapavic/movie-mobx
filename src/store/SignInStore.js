import form from "../utils/signInForm";
import { action, makeObservable, observable } from "mobx";
import AuthService from "../services/AuthService";

class Store {
  constructor() {
    makeObservable(this, {
      onSignIn: action,
      AuthService: observable,
    });
  }

  AuthService = new AuthService();

  onSignIn = () => {
    form.submit({
      onSuccess: () => {
        const { email, password } = form.values();
        this.AuthService.signIn(email, password);
        // console.log(form.values());
      },
      onError: (error) => console.log(error.message),
    });
  };
}

export const SignInStore = new Store();
