import { db } from "../config/firebase";
import { getDocs, collection, query, orderBy, where } from "firebase/firestore";
import { HomeStore } from "../store/HomeStore";

const moviesCollectionRef = collection(db, "movies");

class HomeService {
  getMovieList = async () => {
    try {
      const q = query(moviesCollectionRef, orderBy("title", "asc"));
      const data = await getDocs(q);
      const movieData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      HomeStore.setMovies(movieData);
      HomeStore.setTotalItems(movieData.length);
    } catch (err) {
      console.error(err);
    }
  };

  sortData = async (e) => {
    try {
      const q = query(moviesCollectionRef, orderBy("title", e.target.value));
      const data = await getDocs(q);
      const sortedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      HomeStore.setMovies(sortedData);
    } catch (err) {
      console.error(err);
    }
  };

  filterData = async (e) => {
    try {
      if (e.target.value === "all") {
        this.getMovieList();
      } else if (e.target.value === "1") {
        const q = query(moviesCollectionRef, where("rating", "==", 1));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        HomeStore.setMovies(filteredData);
        HomeStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "2") {
        const q = query(moviesCollectionRef, where("rating", "==", 2));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        HomeStore.setMovies(filteredData);
        HomeStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "3") {
        const q = query(moviesCollectionRef, where("rating", "==", 3));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        HomeStore.setMovies(filteredData);
        HomeStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "4") {
        const q = query(moviesCollectionRef, where("rating", "==", 4));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        HomeStore.setMovies(filteredData);
        HomeStore.setTotalItems(filteredData.length);
      } else if (e.target.value === "5") {
        const q = query(moviesCollectionRef, where("rating", "==", 5));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        HomeStore.setMovies(filteredData);
        HomeStore.setTotalItems(filteredData.length);
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export default HomeService;
