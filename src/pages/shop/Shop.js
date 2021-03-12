import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import CollectionPage from "../collection-page/CollectionPage";

const Shop = ({ match }) => {
  // console.log("match", match, "history", history);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
