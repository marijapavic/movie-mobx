import { action, makeObservable, observable } from "mobx";

class Store {
  constructor() {
    makeObservable(this, {
      movie: observable,
      newTitle: observable,
      newReleaseYear: observable,
      newOverview: observable,
      newImage: observable,
      isModalOpen: observable,
      setMovie: action,
      setNewTitle: action,
      setNewReleaseYear: action,
      setNewOverview: action,
      setNewImage: action,
      openModal: action,
      closeModal: action,
    });
  }
  movie = [];
  newTitle = "";
  newReleaseYear = 0;
  newOverview = "";
  newImage = "";
  isModalOpen = false;

  setMovie = (movie) => {
    this.movie = movie;
  };

  setNewTitle = (newTitle) => {
    this.newTitle = newTitle;
  };

  setNewReleaseYear = (newReleaseYear) => {
    this.newReleaseYear = newReleaseYear;
  };

  setNewOverview = (newOverview) => {
    this.newOverview = newOverview;
  };

  setNewImage = (newImage) => {
    this.newImage = newImage;
  };

  openModal = () => {
    this.isModalOpen = true;
  };

  closeModal = () => {
    this.isModalOpen = false;
  };
}

export const MovieCardStore = new Store();
