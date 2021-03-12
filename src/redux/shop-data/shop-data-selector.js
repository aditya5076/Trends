import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

export const selectShop = (state) => state.collections;

export const selectShopData = createSelector(
  [selectShop],
  (collections) => collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopData],
    (collections) =>
      // USING ARRAY TO FIND
      // collections.find(
      //   (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      // )

      // USING OBJECT TO FIND WITH KEY CALLED AS DATA-NORMALIZATION
      collections[collectionUrlParam]
  );
