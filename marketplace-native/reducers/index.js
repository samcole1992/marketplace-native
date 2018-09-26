import { combineReducers, createStore } from "redux"
import auth from "./auth"
import bids from "./bids"
import offers from "./offers"
import products from "./products"
import orders from "./orders"

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth,
  form: formReducer,
  bids,
  offers,
  products,
  orders

});
