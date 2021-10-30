import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const selectCollections = createSelector(
  [shopSelector],
  shop => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => (collections ? Object.values(collections) : []),
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => (collections ? collections[collectionUrlParam] : null),
);

export const selectIsCollectionsFetching = createSelector(
  [shopSelector],
  shop => shop.isFetching,
);

export const selectIsCollectionsLoaded = createSelector(
  [shopSelector],
  shop => !!shop.collections,
);

export default { selectCollections };
