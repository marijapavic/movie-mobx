import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import MobxReactForm from "mobx-react-form";

const plugins = {
  dvr: dvr(validatorjs),
};

const fields = {
  email: {
    name: "email",
    label: "email",
    placeholder: "Email",
    rules: "required|email|string",
  },
  password: {
    name: "password",
    label: "password",
    placeholder: "Password",
    rules: "required|string|min:8",
    type: "password",
  },
};

const form = new MobxReactForm({ fields }, { plugins });
export default form;
