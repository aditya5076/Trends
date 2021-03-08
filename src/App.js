import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import SignUpAndSignIn from "./pages/signUpandIn/SignUpAndSignIn";
import { auth, createUserProfileDocument } from "./firebase/FirebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";
import "./App.css";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: "",
  //   };
  // }
  unsubsribeFromAuth = null;
  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      // this.setState({ currentUser: user });

      // TO STORE THE DB'S USERDATA INTO THE STATE OF OUR APP
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data(),
            }
            // () => console.log("state", this.state)
          );
          console.log("state", this.state);
        });
      } else {
        // this.setState({ currentUser: authUser }, () =>
        //   console.log("without snapshot", this.state)
        // );
        this.props.setCurrentUser(authUser);
      }
    });
  }
  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }
  render() {
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpAndSignIn />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
