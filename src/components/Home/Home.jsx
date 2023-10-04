import { observer } from "mobx-react";
import { HomeStore } from "../../store/HomeStore";
import { useEffect } from "react";
import "./style.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Home = observer(() => {
  useEffect(() => {
    HomeStore.getMovieList();
  }, []);

  const pagesVisited = HomeStore.pageNumber * HomeStore.moviesPerPage;
  const displayMovies = HomeStore.movies
    .slice(pagesVisited, pagesVisited + HomeStore.moviesPerPage)
    .map((movie) => {
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
    });
  const pageCount = Math.ceil(HomeStore.totalItems / HomeStore.moviesPerPage);
  const changePage = ({ selected }) => {
    HomeStore.setPageNumber(selected);
  };

  return (
    <div>
      <div className="utils">
        <div className="dropdown-container">
          <label>Sort:</label>
          <select className="dropdown" onChange={(e) => HomeStore.sortData(e)}>
            <option className="dropdown-option" value="asc">
              asc
            </option>
            <option className="dropdown-option" value="desc">
              desc
            </option>
          </select>
        </div>
        <div className="dropdown-container">
          <label>Filter:</label>
          <select
            className="dropdown"
            onChange={(e) => HomeStore.filterData(e)}
          >
            <option className="dropdown-option" value="all">
              All
            </option>
            <option className="dropdown-option" value="1">
              1 star
            </option>
            <option className="dropdown-option" value="2">
              2 stars
            </option>
            <option className="dropdown-option" value="3">
              3 stars
            </option>
            <option className="dropdown-option" value="4">
              4 stars
            </option>
            <option className="dropdown-option" value="5">
              5 stars
            </option>
          </select>
        </div>
      </div>
      <div className="content">{displayMovies}</div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-btns"}
        previousLinkClassName={"prev-btn"}
        nextLinkClassName={"next-btn"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
      />
    </div>
  );
});

export default Home;
