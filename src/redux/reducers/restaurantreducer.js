import { CLICK_FILTER } from "./../../redux/constants";
const initialState = {
  filterClicked: false,
  addressClicked: false,
  totalRestaurants: undefined,
  overlayDirection: "right",
  moreRestaurants: true,
  pageNumber: 0,
  filterApplyClicked: false,
  // restaurant: [],
};
export default function restaurantReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CLICK_FILTER:
      return {
        ...state,
        filterClicked: action.data.filterClicked,
        addressClicked: action.data.addressClicked,
        totalRestaurants: action.data.totalRestaurants,
        overlayDirection: action.data.overlayDirection,
        moreRestaurants: action.data.moreRestaurants,
        pageNumber: action.data.pageNumber,
        filterApplyClicked: action.data.filterApplyClicked,
        //restaurant: action.data.restaurant,
      };

    default:
      return state;
  }
}
