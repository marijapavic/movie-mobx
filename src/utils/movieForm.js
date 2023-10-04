import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import MobxReactForm from "mobx-react-form";

const plugins = {
  dvr: dvr(validatorjs),
};

const fields = {
  title: {
    name: "title",
    label: "title",
    placeholder: "Movie title",
    rules: "required|string",
  },
  releaseYear: {
    name: "releaseYear",
    label: "release year",
    placeholder: "Release year",
    rules: "required",
  },
  image: {
    name: "image",
    label: "image url",
    placeholder: "Image url",
    rules: "required|string",
  },
  overview: {
    name: "overview",
    label: "overview",
    placeholder: "Overview",
    rules: "required|string",
  },
  rating: {
    name: "rating",
    label: "rating",
    placeholder: "Rating",
    rules: "required",
  },
};

const form = new MobxReactForm({ fields }, { plugins });
export default form;
