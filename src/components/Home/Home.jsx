import { observer } from "mobx-react";
import { HomeStore } from "../../store/HomeStore";
import { HomeService } from "../../services/HomeService";
import { useEffect } from "react";
import Movie from "../Movie/Movie";
import "./style.css";

const Home = observer(() => {
  useEffect(() => {
    HomeService.getMovieList();
  }, []);

  return (
    <div>
      <div className="utils">
        <div className="dropdown-container">
          <label>Sort:</label>
          <select className="dropdown" onChange={HomeService.sortData}>
            <option className="dropdown-option" value="asc">
              asc
            </option>
            <option className="dropdown-option" value="desc">
              desc
            </option>
          </select>
        </div>
      </div>
      <Movie movies={HomeStore.movies} />
    </div>
  );
});

export default Home;
