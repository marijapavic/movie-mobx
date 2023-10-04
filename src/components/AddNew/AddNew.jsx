import { Link } from "react-router-dom";
import { AddNewStore } from "../../store/AddNewStore";
import { observer } from "mobx-react";
import "./style.css";
import Rating from "react-rating";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import form from "../../utils/movieForm";

const AddNew = observer(() => {
  return (
    <div className="form-page">
      <h2>Add new movie</h2>
      <div className="form-container">
        <input
          className="add-input"
          placeholder="Movie title"
          onChange={(e) => (form.$("title").value = e.target.name)}
          {...form.$("title").bind()}
        />
        <p className="p-error">{form.$("title").error}</p>
        <input
          className="add-input"
          placeholder="Release year"
          type="number"
          onChange={(e) => (form.$("releaseYear").value = e.target.value)}
          {...form.$("releaseYear").bind()}
        />
        <p className="p-error">{form.$("releaseYear").error}</p>
        <input
          className="add-input"
          placeholder="Image url"
          type="url"
          onChange={(e) => (form.$("image").value = e.target.value)}
          {...form.$("image").bind()}
        />
        <p className="p-error">{form.$("image").error}</p>
        <textarea
          placeholder="Movie overview"
          onChange={(e) => (form.$("overview").value = e.target.value)}
          {...form.$("overview").bind()}
          rows="5"
          cols="50"
        ></textarea>
        <p className="p-error">{form.$("overview").error}</p>
        <div className="rating">
          <span>Rate: </span>
          <Rating
            initialRating={AddNewStore.newRating}
            className="stars"
            emptySymbol={<AiOutlineStar />}
            fullSymbol={<AiFillStar />}
            onChange={(e) => (form.$("rating").value = e.target.value)}
            {...form.$("rating").bind()}
          />
          <p className="p-error">{form.$("rating").error}</p>
        </div>
        <Link to="/">
          <button className="submit-btn" onClick={() => AddNewStore.onAddNew()}>
            Submit movie
          </button>
        </Link>
      </div>
    </div>
  );
});

export default AddNew;
