import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import SignUpAndSignIn from "./pages/signUpandIn/SignUpAndSignIn";
import { auth } from "./firebase/FirebaseUtils";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: "",
    };
  }
  unsubsribeFromAuth = null;
  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signIn" component={SignUpAndSignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
