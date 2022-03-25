import { SET_RESTAURANTS } from '../../constants/actionTypes'

const setRestaurants = (restaurants) => {
  return {
    type: SET_RESTAURANTS,
    payload: restaurants,
  }
}

export { setRestaurants }
