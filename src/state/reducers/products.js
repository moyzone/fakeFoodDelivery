import { SET_RESTAURANTS } from '../../constants/actionTypes'

const INIT_STATE = []

const restaurantsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return [...action.payload]
    default:
      return state
  }
}

export default restaurantsReducer
