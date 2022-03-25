import isCartOpenReducer from './isCartOpen'
import restaurantsReducer from './products'
import cartReducer from './cart'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isCartOpen: isCartOpenReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer
})

export default rootReducer