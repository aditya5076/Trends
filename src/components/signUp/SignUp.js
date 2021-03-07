import React, { Component } from "react";
import FormInput from "../formInput/FormInput";
import CustomBtn from "../custom-button/CustomBtn";

import { auth, createUserProfileDocument } from "../../firebase/FirebaseUtils";

import "./SignUp.scss";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmpassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmpassword } = this.state;
    if (password !== confirmpassword) {
      alert("password not matching");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      // RESET THE FILLED FORM TO EMPTY
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmpassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomBtn type="submit">SIGN UP</CustomBtn>
        </form>
      </div>
    );
  }
}
