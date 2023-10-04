import { db } from "../config/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { MovieCardStore } from "../store/MovieCardStore";

class MovieCardService {
  static locationMethod = (id) => {
    console.log(id);
  };

  getMovie = async () => {
    try {
      const docRef = doc(db, "movies", MovieCardStore.location);
      const docSnap = await getDoc(docRef);
      MovieCardStore.setMovie(docSnap.data());
      console.log(docSnap.data());
    } catch (err) {
      console.error(err);
    }
  };

  onSubmitEdit = async () => {
    const movieDoc = doc(db, "movies", MovieCardStore.location);
    await updateDoc(movieDoc, {
      title: MovieCardStore.newTitle,
      releaseYear: MovieCardStore.newReleaseYear,
      image: MovieCardStore.newImage,
      overview: MovieCardStore.newOverview,
      rating: MovieCardStore.newRating,
    });
  };

  deleteMovie = async () => {
    const movieDoc = doc(db, "movies", MovieCardStore.location);
    await deleteDoc(movieDoc);
  };
}

export default MovieCardService;
