import { makeObservable, observable, action } from "mobx";

class Store {
  constructor() {
    makeObservable(this, {
      movies: observable,
      setMovies: action,
    });
  }
  movies = [];

  setMovies = (movies) => {
    this.movies = movies;
  };
}

export const HomeStore = new Store();
