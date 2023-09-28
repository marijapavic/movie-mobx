import { Link } from "react-router-dom";
import "./style.css";

const Movie = ({ movies }) => {
  return (
    <div className="content">
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.id} className="movie">
              <Link to={`/movies/${movie.id}`} state={{ id: movie.id }}>
                <img
                  src={
                    movie.image
                      ? movie.image
                      : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                  }
                  alt={movie.title}
                />
                <div className="movie-title">
                  <p>{movie.title}</p>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Movie;
