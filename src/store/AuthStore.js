import { action, computed, makeObservable, observable } from "mobx";

class Store {
  constructor() {
    makeObservable(this, {
      name: observable,
      nameError: observable,
      email: observable,
      emailError: observable,
      password: observable,
      passwordError: observable,
      setName: action,
      setEmail: action,
      setPassword: action,
      isValid: computed,
    });
  }
  name = "";
  nameError = "";
  email = "";
  emailError = "";
  password = "";
  passwordError = "";

  setName = (name) => {
    this.name = name;
  };

  setEmail = (email) => {
    this.email = email;
  };

  setPassword = (password) => {
    this.password = password;
  };

  get isValid() {
    return (
      this.nameError === "" &&
      this.emailError === "" &&
      this.passwordError === ""
    );
  }
}

export const AuthStore = new Store();
