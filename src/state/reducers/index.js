import restaurantsReducer from './products'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
})

export default rootReducer