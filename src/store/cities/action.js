import {
  FETCH_ALL_CITIES_SUCCESS,
  FETCH_ALL_CITIES_ERROR
} from './types'

export const fetchAllCitiesSuccess = (cities) => {
  return {
    type: FETCH_ALL_CITIES_SUCCESS,
    cities
  }
}
export const fetchAllCitiesError = (error) => {
  return {
    type: FETCH_ALL_CITIES_ERROR,
    error
  }
}
