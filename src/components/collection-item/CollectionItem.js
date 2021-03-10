import React from "react";
import CustomBtn from "../custom-button/CustomBtn";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";
import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <CustomBtn onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomBtn>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
