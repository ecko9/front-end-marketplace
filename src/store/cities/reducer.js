import {
  FETCH_ALL_CITIES_SUCCESS,
  FETCH_ALL_CITIES_ERROR
} from './types'

const initialState = {
  cities: [],
  error: ''
}

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.cities
      };
    case FETCH_ALL_CITIES_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
export default citiesReducer;