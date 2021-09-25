import { combineReducers } from "redux";
import restaurantReducer from "./../reducers/restaurantreducer";

const rootReducer = combineReducers({
  restaurantReducer,
});

export default rootReducer;
