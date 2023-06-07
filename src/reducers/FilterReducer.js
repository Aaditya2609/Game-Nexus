export const filterReducer = (stateFilter, actionFilter) => {
  switch (actionFilter.type) {
    case "SET_PRICE_FILTER":
      return {
        ...stateFilter,
        priceFilter: actionFilter.payload,
      };
      case "SET_SEARCH_FILTER":
        return {
          ...stateFilter,
          searchFilter: actionFilter.payload,
        };

    case "SET_CATEGORY_FILTER":
      return {
        ...stateFilter,
        categoryFilter: [...stateFilter.categoryFilter, actionFilter.payload]
      };

    case "REMOVE_CATEGORY_FILTER":
      return {
        ...stateFilter,
        categoryFilter: stateFilter.categoryFilter.filter(category => category !== actionFilter.payload)
      };

    case "SET_RATING_FILTER":
      return {
        ...stateFilter,
        ratingFilter: actionFilter.payload,
      };

    case "RESET":
      return {
        ...stateFilter,
        ratingFilter: 0,
        categoryFilter: [],
        priceFilter: "",
        searchFilter:""
      };

    default:
      return stateFilter;
  }
};
