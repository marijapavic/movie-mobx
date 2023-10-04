import { action, makeObservable } from "mobx";
import form from "../utils/movieForm";
import { db, auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

const moviesCollectionRef = collection(db, "movies");

class Store {
  constructor() {
    makeObservable(this, {
      onAddNew: action,
    });
  }

  onAddNew = () => {
    form.submit({
      onSuccess(form) {
        const { title, releaseYear, image, overview, rating } = form.values();
        addDoc(moviesCollectionRef, {
          title,
          releaseYear,
          userId: auth?.currentUser?.uid,
          image,
          overview,
          rating,
        });
      },
      onError(form) {
        console.log(form.errors());
      },
    });
  };
}

export const AddNewStore = new Store();
