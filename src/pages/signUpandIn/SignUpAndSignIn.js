import React from "react";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signUp/SignUp";
import "./sign-in-and-sign-up.scss";

const SignUpAndSignIn = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignUpAndSignIn;
