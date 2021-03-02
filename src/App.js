import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
