import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import SHOP_DATA from "./shop_data";

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...othercollectionsProps }) => (
          <CollectionPreview key={id} {...othercollectionsProps} />
        ))}
      </div>
    );
  }
}
