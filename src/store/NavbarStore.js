import { action, makeObservable, observable } from "mobx";

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

  setShowNavbar = (showNavbar) => {
    this.showNavbar = showNavbar;
  };

  handleShowNavbar = () => {
    this.setShowNavbar(!this.showNavbar);
  };

  setIsLoggedIn = (isLoggedIn) => {
    this.isLoggedIn = isLoggedIn;
  };
}

export const NavbarStore = new Store();
