import axios from "axios";
import {environment} from "../environment";

const basePath = environment.baseUrl;

export const ACCESS_TOKEN_KEY = "access token key";

const Axios = axios.create({
  headers: {
    Authorization: localStorage.getItem(ACCESS_TOKEN_KEY) || null,
  },
});
export function login(phoneNumber, password) {
  return Axios.post(basePath+"/login", {
    phoneNumber,
    password,
  });
}

export function addUsers(phoneNumber, password, name, email, city) {
  return Axios.post(basePath+"/createaccount", {
    name: name,
    phoneNumber: phoneNumber,
    password: password,
    email: email,
    city: city,
  });
}
export function getTotalNumberOfRestaurants(city) {
  return Axios.get(basePath+`/gettotalnumberofrestaurants/${city}`);
}
export function getAllCuisines() {
  return Axios.get(basePath+`/getallcuisines`);
}

// //mocking method

// export async function getAllCuisines() {
//   return { data: ["ramesh", "suresh", " atu"] };
// }

export function getRestaurantsByCuisine(city, cuisine, page) {
  return Axios.get(
      basePath+`/getrestaurantsbycuisine/${city}/${cuisine}/${page}`
  );
}
export function getAverageRatingOfRestaurants(city, restaurantId) {
  return Axios.get(
      basePath+`/getratingsaverage/${restaurantId}/${city}`
  );
}
export function getRestaurantdishId(restaurantId, dishId) {
  return Axios.get(
      basePath+`/getRestaurantdishid/${restaurantId}/${dishId}`
  );
}
export function getRestaurants(city, page, sortBy) {
  return Axios.get(
      basePath+`/getRestaurant/${city}/${page}/${sortBy}`
  );
}
export function getRestaurantsByNameAndAddress(name, city, page) {
  return Axios.get(
      basePath+`/getRestaurantByNameAndAddress/${name}/${city}/${page}`
  );
}
export function getOffers(restaurantId) {
  return Axios.get(basePath+`/offers/${restaurantId}`);
}
export function getCuisines(restaurantId) {
  return Axios.get(basePath+`/cuisine/${restaurantId}`);
}
export function getDishes(restaurantId) {
  return Axios.get(basePath+`/dishes/${restaurantId}`);
}

export function getCartItems(userId) {
  return Axios.get(basePath+`/getcartitems/${userId}`);
}
export function getOrders(userId) {
  return Axios.get(basePath+`/getorders/${userId}`);
}
export async function deleteCartItems(cartId) {
  const response = await Axios.delete(
      basePath+`/deletecartitem/${cartId}`
  );
  return response;
}

export function getTotal(userId) {
  return Axios.get(basePath+`/gettotal/${userId}`);
}
export function getUser(userId) {
  return Axios.get(basePath+`/findById/${userId}`);
}
export function getRestaurantByCostForTwo(city, page) {
  return Axios.get(
      basePath+`/getrestaurantsbycostfortwo/${city}/${page}`
  );
}
export function getRestaurantByRatings(city, page) {
  return Axios.get(
      basePath+`/getrestaurantsbyrating/${city}/${page}`
  );
}
export function getRestaurantByDeliveryTime(city, page) {
  return Axios.get(
      basePath+`/getrestaurantsbytimetocook/${city}/${page}`
  );
}
export function placeOrder(restaurantdishId, userId, portion) {
  return Axios.post(basePath+`/placeOrder`, {
    restaurantdishId: restaurantdishId,
    userId: userId,
    portion: portion,
  });
}
export async function updatePortion(cartId, portion) {
  const response = await Axios.put(
      basePath+`/updateportion/${cartId}`,
    {
      cartId: cartId,

      portion: portion,
    }
  );
  return response;
}
export function addDishesToTheCart(restaurantdishId, userId, portion) {
  return Axios.post(basePath+"/addcartuser", {
    restaurantdishId: restaurantdishId,
    userId: userId,
    portion: portion,
  });
}
