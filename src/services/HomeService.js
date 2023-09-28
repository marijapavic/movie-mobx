import { db } from "../config/firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { HomeStore } from "../store/HomeStore";
import { action, makeObservable } from "mobx";

const moviesCollectionRef = collection(db, "movies");

class Store {
  constructor() {
    makeObservable(this, {
      getMovieList: action,
      sortData: action,
    });
  }

  getMovieList = async () => {
    try {
      const q = query(moviesCollectionRef, orderBy("title", "asc"));
      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      HomeStore.setMovies(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  sortData = async (e) => {
    try {
      const q = query(
        moviesCollectionRef,
        orderBy("title", `${e.target.value}`)
      );
      const data = await getDocs(q);

      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      HomeStore.setMovies(filteredData);
      console.log(e.target.value);
    } catch (err) {
      console.error(err);
    }
  };
}

export const HomeService = new Store();
