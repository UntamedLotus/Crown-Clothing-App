import {
  signInWithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/sign-up-form/su-form";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
