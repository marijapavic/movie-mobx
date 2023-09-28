import { db, auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { AddNewStore } from "../store/AddNewStore";
import { action, makeObservable } from "mobx";

const moviesCollectionRef = collection(db, "movies");

class Store {
  constructor() {
    makeObservable(this, {
      onSubmitMovie: action,
      validateTitle: action,
      validateReleaseYear: action,
      validateImage: action,
      validateOverview: action,
    });
  }

  onSubmitMovie = () => {
    try {
      addDoc(moviesCollectionRef, {
        title: AddNewStore.newTitle,
        releaseYear: AddNewStore.newReleaseYear,
        userId: auth?.currentUser?.uid,
        image: AddNewStore.newImage,
        overview: AddNewStore.newOverview,
      });
    } catch (err) {
      console.error(err);
    }
  };

  validateTitle = () => {
    if (AddNewStore.newTitle.trim() === "") {
      AddNewStore.titleError = "Title is required";
    } else {
      AddNewStore.titleError = "";
    }
  };

  validateReleaseYear = () => {
    if (AddNewStore.newReleaseYear.trim() === "") {
      AddNewStore.releaseYearError = "Release year is required";
    } else {
      AddNewStore.releaseYearError = "";
    }
  };

  validateImage = () => {
    if (AddNewStore.newImage.trim() === "") {
      AddNewStore.imageError = "Image is required";
    } else {
      AddNewStore.imageError = "";
    }
  };

  validateOverview = () => {
    if (AddNewStore.newOverview.trim() === "") {
      AddNewStore.overviewError = "Overview is required";
    } else {
      AddNewStore.overviewError = "";
    }
  };
}

export const AddNewService = new Store();
