import { makeObservable, observable, action } from "mobx";
import HomeService from "../services/HomeService";

class Store {
  constructor() {
    makeObservable(this, {
      movies: observable,
      totalItems: observable,
      setMovies: action,
      setTotalItems: action,
      pageCount: observable,
      setPageCount: action,
      pageNumber: observable,
      moviesPerPage: observable,
      HomeService: observable,
      getMovieList: action,
      sortData: action,
      filterData: action,
    });
  }
  movies = [];
  totalItems = null;
  pageCount = 0;
  moviesPerPage = 4;
  pageNumber = 0;

  HomeService = new HomeService();

  getMovieList = () => {
    this.HomeService.getMovieList();
  };

  sortData = (e) => {
    this.HomeService.sortData(e);
  };

  filterData = (e) => {
    this.HomeService.filterData(e);
  };

  setPageNumber = (pageNumber) => {
    this.pageNumber = pageNumber;
  };

  setPageCount = (pageCount) => {
    this.pageCount = pageCount;
  };

  setMovies = (movies) => {
    this.movies = movies;
  };

  setTotalItems = (totalItems) => {
    this.totalItems = totalItems;
  };
}

export const HomeStore = new Store();
