import { action, makeObservable, observable } from "mobx";
import NavbarService from "../services/NavbarService";

class Store {
  constructor() {
    makeObservable(this, {
      showNavbar: observable,
      isLoggedIn: observable,
      setShowNavbar: action,
      handleShowNavbar: action,
      setIsLoggedIn: action,
    });
  }
  showNavbar = false;
  isLoggedIn = null;

  NavbarService = new NavbarService();

  setShowNavbar = (showNavbar) => {
    this.showNavbar = showNavbar;
  };

  handleShowNavbar = () => {
    this.setShowNavbar(!this.showNavbar);
  };

  setIsLoggedIn = (isLoggedIn) => {
    this.isLoggedIn = isLoggedIn;
  };

  logOut = () => {
    this.NavbarService.logOut();
  };
}

export const NavbarStore = new Store();
