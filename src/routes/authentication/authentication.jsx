import "./authentication.scss";

import SignUpForm from "../../components/sign-up-form/su-form";
import SignInForm from "../../components/sign-in/si-form";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
