import { productConstants } from "../action/constants";

const initState = {
  products: {},
  product: {},
  status: true,
};

export default (state = initState, action) => {
  console.log("action", action, action.payload); // Add a console.log to debug the action object
  switch (action.type) {
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        products: action.payload, // Update products with the payload
        status: true, // Set status to true
      };
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        product: action.payload, // Update products with the payload
      };
    default:
      return state; // Return the default state for all other cases
  }
};
