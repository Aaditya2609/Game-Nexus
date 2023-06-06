export const ProductReducer = (stateProduct, actionProduct) => {
  switch (actionProduct.type) {
    case "GET_PRODUCTS":
      return { ...stateProduct, loading: true };
    case "GET_PRODUCTS_LOADED":
      return {
        ...stateProduct,
        loading: false,
        product: actionProduct.payload,
      };
    case "GET_CATEGORY_LOADED":
      return {
        ...stateProduct,
        category: actionProduct.payload,
      };
    case "ERROR":
      return { ...stateProduct, loading: false, product: null };
    default:
      return stateProduct;
  }
};