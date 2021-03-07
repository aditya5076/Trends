import React, { Component } from "react";
import CustomBtn from "../custom-button/CustomBtn";
import FormInput from "../formInput/FormInput";
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/FirebaseUtils";
import "./SignIn.scss";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="buttons">
            <CustomBtn type="submit">Sign In</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}
