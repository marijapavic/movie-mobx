import { db } from "../config/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { MovieCardStore } from "../store/MovieCardStore";
import { action, makeObservable, observable } from "mobx";
import { useLocation } from "react-router-dom";

class Store {
  constructor() {
    makeObservable(this, {
      location: observable,
      id: observable,
      getMovie: action,
      onSubmitEdit: action,
      deleteMovie: action,
    });
  }

  location = useLocation();
  id = this.location.id;

  getMovie = async () => {
    try {
      const docRef = doc(db, "movies", this.id);
      const docSnap = await getDoc(docRef);
      MovieCardStore.setMovie(docSnap.data());
      console.log(docSnap.data());
    } catch (err) {
      console.error(err);
    }
  };

  onSubmitEdit = async () => {
    const movieDoc = doc(db, "movies", this.id);
    await updateDoc(movieDoc);
  };

  deleteMovie = async () => {
    const movieDoc = doc(db, "movies", this.id);
    await deleteDoc(movieDoc);
  };
}

export const MovieCardService = new Store();
