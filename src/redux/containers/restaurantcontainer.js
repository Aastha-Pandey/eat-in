import { AllRestaurant } from "./../../components/allrestaurants";
import { connect } from "react-redux";
import { clickFilter } from "./../../redux/actions/restaurantaction";
import MiddleNavigationTab from "../../components/middlenavigationtab";
import Overlay from "./../../components/overlay";
import TopNavigationBar from "../../components/topnavigationbar";
import Routing from "../../components/routing";
import MiddleNavigationBar from "../../components/middlenavigationbar";
import RestaurantsCategory from "../../components/restaurantscategory";
import Filter from "./../../components/filter";
//read state
const mapStateToProps = (state) => {
  return {
    filterClicked: state.restaurantReducer.filterClicked,
    addressClicked: state.restaurantReducer.addressClicked,
    overlayDirection: state.restaurantReducer.overlayDirection,
    totalRestaurants: state.restaurantReducer.totalRestaurants,
    moreRestaurants: state.restaurantReducer.moreRestaurants,
    pageNumber: state.restaurantReducer.pageNumber,
    filterApplyClicked: state.restaurantReducer.filterApplyClicked,
    // restaurant: state.restaurantReducer.restaurant,
  };
};

//write state
const mapDispatchToProps = (dispatch) => {
  return {
    clickFilterHandler: (data) => dispatch(clickFilter(data)),
  };
};

export default {
  restaurantConnect: connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllRestaurant),
  middlenavigationtabConnect: connect(
    mapStateToProps,
    mapDispatchToProps
  )(MiddleNavigationTab),
  overlayConnect: connect(mapStateToProps, mapDispatchToProps)(Overlay),
  topnavigationbarConnect: connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopNavigationBar),
  routingConnect: connect(mapStateToProps, mapDispatchToProps)(Routing),
  middlenavigationbarConnect: connect(
    mapStateToProps,
    mapDispatchToProps
  )(MiddleNavigationBar),
  restaurantsCategoryConnect: connect(
    mapStateToProps,
    mapDispatchToProps
  )(RestaurantsCategory),
  filterConnect: connect(mapStateToProps, mapDispatchToProps)(Filter),
};
