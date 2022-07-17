import {
  signInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/sign-up-form/su-form";
import SignInForm from "../../components/sign-in/si-form";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
