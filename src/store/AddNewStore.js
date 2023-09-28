import { action, makeObservable, observable, computed } from "mobx";

class Store {
  constructor() {
    makeObservable(this, {
      newTitle: observable,
      titleError: observable,
      newReleaseYear: observable,
      releaseYearError: observable,
      newImage: observable,
      imageError: observable,
      newOverview: observable,
      overviewError: observable,
      setNewTitle: action,
      setTitleError: action,
      setNewReleaseYear: action,
      setReleaseYearError: action,
      setNewImage: action,
      setImageError: action,
      setNewOverview: action,
      setOverviewError: action,
      isValid: computed,
    });
  }
  newTitle = "";
  titleError = "";
  newReleaseYear = "";
  releaseYearError = "";
  newImage = "";
  imageError = "";
  newOverview = "";
  overviewError = "";

  setNewTitle = (newTitle) => {
    this.newTitle = newTitle;
  };

  setTitleError = (titleError) => {
    this.titleError = titleError;
  };

  setNewReleaseYear = (newReleaseYear) => {
    this.newReleaseYear = newReleaseYear;
  };

  setReleaseYearError = (releaseYearError) => {
    this.releaseYearError = releaseYearError;
  };

  setNewImage = (newImage) => {
    this.newImage = newImage;
  };

  setImageError = (imageError) => {
    this.imageError = imageError;
  };

  setNewOverview = (newOverview) => {
    this.newOverview = newOverview;
  };

  setOverviewError = (overviewError) => {
    this.overviewError = overviewError;
  };

  get isValid() {
    return (
      this.titleError === "" &&
      this.releaseYearError === "" &&
      this.imageError === "" &&
      this.overviewError === ""
    );
  }
}

export const AddNewStore = new Store();
