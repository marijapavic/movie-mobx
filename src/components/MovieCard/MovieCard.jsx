import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { observer } from "mobx-react";
import { MovieCardStore } from "../../store/MovieCardStore";
import "./style.css";
import { NavbarStore } from "../../store/NavbarStore";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import form from "../../utils/movieForm";

const MovieCard = observer(() => {
  const location = useLocation();
  const { id } = location.state;

  MovieCardStore.locationMethod(id);

  useEffect(() => {
    MovieCardStore.getMovie();
  }, []);

  return (
    <div className="movie-container">
      <div className="movie-header">
        <h2>{MovieCardStore.movie.title}</h2>
        {NavbarStore.isLoggedIn && (
          <div className="update-btns">
            <button className="open-modal" onClick={MovieCardStore.openModal}>
              Edit
            </button>
            <Link to="/">
              <button
                className="delete-btn"
                onClick={() =>
                  MovieCardStore.deleteMovie(MovieCardStore.movie.id)
                }
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
                  onChange={(e) => (form.$("title").value = e.target.name)}
                  {...form.$("title").bind()}
                />
                <p className="p-error">{form.$("title").error}</p>
                <input
                  className="movie-input"
                  type="number"
                  onChange={(e) =>
                    (form.$("releaseYear").value = e.target.value)
                  }
                  {...form.$("releaseYear").bind()}
                />
                <p className="p-error">{form.$("releaseYear").error}</p>
                <input
                  className="movie-input"
                  type="url"
                  onChange={(e) => (form.$("image").value = e.target.value)}
                  {...form.$("image").bind()}
                />
                <p className="p-error">{form.$("image").error}</p>
                <textarea
                  onChange={(e) => (form.$("overview").value = e.target.value)}
                  {...form.$("overview").bind()}
                  rows="5"
                  cols="50"
                ></textarea>
                <p className="p-error">{form.$("overview").error}</p>
                <div className="rating">
                  <span>Rate: </span>
                  <Rating
                    className="stars"
                    emptySymbol={<AiOutlineStar />}
                    fullSymbol={<AiFillStar />}
                    onChange={(e) => (form.$("rating").value = e.target.value)}
                    {...form.$("rating").bind()}
                  />
                  <p className="p-error">{form.$("rating").error}</p>
                </div>
                <button
                  className="edit-btn"
                  onClick={() => MovieCardStore.closeModal()}
                >
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
          <h4>Rating:</h4>
          <p>
            {MovieCardStore.movie.rating}
            <AiFillStar />
          </p>
        </div>
      </div>
    </div>
  );
});

export default MovieCard;
