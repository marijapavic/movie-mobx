import { Link } from "react-router-dom";
import { AddNewStore } from "../../store/AddNewStore";
import { observer } from "mobx-react";
import "./style.css";
import { AddNewService } from "../../services/AddNewService";

const AddNew = observer(() => {
  return (
    <div className="form-page">
      <h2>Add new movie</h2>
      <div className="form-container">
        <input
          className="add-input"
          placeholder="Movie title"
          onChange={(e) => {
            AddNewStore.setNewTitle(e.target.value);
            AddNewService.validateTitle();
          }}
        />
        {AddNewStore.titleError && (
          <p className="p-error">{AddNewStore.titleError}</p>
        )}
        <input
          className="add-input"
          placeholder="Release year"
          type="number"
          onChange={(e) => {
            AddNewStore.setNewReleaseYear(e.target.value);
            AddNewService.validateReleaseYear();
          }}
        />
        {AddNewStore.releaseYearError && (
          <p className="p-error">{AddNewStore.releaseYearError}</p>
        )}
        <input
          className="add-input"
          placeholder="Image url"
          type="url"
          onChange={(e) => {
            AddNewStore.setNewImage(e.target.value);
            AddNewService.validateImage();
          }}
        />
        {AddNewStore.imageError && (
          <p className="p-error">{AddNewStore.imageError}</p>
        )}
        <textarea
          placeholder="Movie overview"
          onChange={(e) => {
            AddNewStore.setNewOverview(e.target.value);
            AddNewService.validateOverview();
          }}
          rows="5"
          cols="50"
        ></textarea>
        {AddNewStore.overviewError && (
          <p className="p-error">{AddNewStore.overviewError}</p>
        )}
        <Link to="/">
          <button
            className="submit-btn"
            disabled={!AddNewStore.isValid}
            onClick={AddNewService.onSubmitMovie}
          >
            Submit movie
          </button>
        </Link>
      </div>
    </div>
  );
});

export default AddNew;
