import { useEffect } from "react";
import { db } from "../../config/firebase";
import { doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import { observer } from "mobx-react";
import { MovieCardStore } from "../../store/MovieCardStore";
import "./style.css";
import { NavbarStore } from "../../store/NavbarStore";

const MovieCard = observer(() => {
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      const docRef = doc(db, "movies", id);
      const docSnap = await getDoc(docRef);
      MovieCardStore.setMovie(docSnap.data());
      console.log(docSnap.data());
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitEdit = async () => {
    const movieDoc = doc(db, "movies", id);
    await updateDoc(movieDoc, { title: MovieCardStore.newTitle });
  };

  const deleteMovie = async () => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
  };

  const openModal = () => {
    MovieCardStore.openModal();
  };

  const closeModal = () => {
    onSubmitEdit(MovieCardStore.movie.id);
    MovieCardStore.closeModal();
  };

  return (
    <div className="movie-container">
      <div className="movie-header">
        <h2>{MovieCardStore.movie.title}</h2>
        {NavbarStore.isLoggedIn && (
          <div className="update-btns">
            <button className="open-modal" onClick={openModal}>
              Edit
            </button>
            <Link to="/">
              <button
                className="delete-btn"
                onClick={() => deleteMovie(MovieCardStore.movie.id)}
              >
                Delete
              </button>
            </Link>
          </div>
        )}
      </div>
      <div>
        {MovieCardStore.isModalOpen && (
          <div className="modal">
            <div className="modal-container">
              <h2>Edit movie</h2>
              <div className="modal-content">
                <input
                  className="movie-input"
                  defaultValue={MovieCardStore.movie.title}
                  onChange={(e) => MovieCardStore.setNewTitle(e.target.value)}
                />
                <input
                  className="movie-input"
                  defaultValue={MovieCardStore.movie.releaseYear}
                  type="number"
                  onChange={(e) =>
                    MovieCardStore.setNewReleaseYear(Number(e.target.value))
                  }
                />
                <input
                  className="movie-input"
                  defaultValue={
                    MovieCardStore.movie.image
                      ? MovieCardStore.movie.image
                      : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                  }
                  type="url"
                  onChange={(e) => MovieCardStore.setNewImage(e.target.value)}
                />
                <textarea
                  defaultValue={MovieCardStore.movie.overview}
                  onChange={(e) =>
                    MovieCardStore.setNewOverview(e.target.value)
                  }
                  rows="5"
                  cols="50"
                ></textarea>
                <button className="edit-btn" onClick={() => closeModal()}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="movie-info">
        <img
          src={
            MovieCardStore.movie.image
              ? MovieCardStore.movie.image
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={MovieCardStore.movie.title}
        />
        <div className="movie-details">
          <h4>Overview: </h4>
          <p>{MovieCardStore.movie.overview}</p>
          <h4>Release date:</h4>
          <p>{MovieCardStore.movie.releaseYear}</p>
        </div>
      </div>
    </div>
  );
});

export default MovieCard;
