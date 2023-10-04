import { action, makeObservable, observable } from "mobx";
import MovieCardService from "../services/MovieCardService";
import form from "../utils/movieForm";
import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

class Store {
  constructor() {
    makeObservable(this, {
      movie: observable,
      isModalOpen: observable,
      openModal: action,
      closeModal: action,
      location: observable,
      setLocation: action,
      MovieCardService: observable,
      locationMethod: action,
    });
  }
  movie = [];
  isModalOpen = false;
  location = null;

  setLocation = (location) => {
    this.location = location;
  };

  locationMethod = (id) => {
    this.location = id;
  };

  MovieCardService = new MovieCardService();

  getMovie = () => {
    this.MovieCardService.getMovie();
  };

  onSubmitEdit = () => {
    this.MovieCardService.onSubmitEdit();
  };

  closeModal = () => {
    this.onEdit();
    this.isModalOpen = false;
  };

  deleteMovie = () => {
    this.MovieCardService.deleteMovie();
  };

  setMovie = (movie) => {
    this.movie = movie;
  };

  openModal = () => {
    this.isModalOpen = true;
  };

  onEdit = () => {
    form.submit({
      onSuccess: async () => {
        const { title, releaseYear, image, overview, rating } = form.values();
        const movieDoc = doc(db, "movies", MovieCardStore.location);
        await updateDoc(movieDoc, {
          title,
          releaseYear,
          image,
          overview,
          rating,
        });
        console.log(form.values());
      },
      onError(form) {
        console.log(form.errors());
      },
    });
  };
}

export const MovieCardStore = new Store();
