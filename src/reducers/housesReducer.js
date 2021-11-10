const SET_STREETS = 'SET_STREETS'
const SET_HOUSES = 'SET_HOUSES'
const SET_FLATS = 'SET_FLATS'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_FETCHING_ERROR = 'SET_FETCHING_ERROR'

const initialState = {
   streets: [],
   houses: [],
   flats: [],
   activeAdress: [],
   isLoading: false,
   fetchingError: null
}

export function housesReducer(state = initialState, action) {
   switch (action.type) {
      case SET_STREETS:
         return { ...state, streets: action.payload.filter(item => item.cityId === 1), isLoading: false }
      case SET_HOUSES:
         return { ...state, houses: action.payload, isLoading: false }
      case SET_FLATS:
         return { ...state, flats: action.payload.filter(item => item.typeName === 'Квартира'), isLoading: false }
      case SET_IS_LOADING:
         return { ...state, isLoading: action.payload }
      case SET_FETCHING_ERROR:
         return { ...state, fetchingError: action.payload }
      default:
         return { ...state }
   }
}

export const setStreetsAC = (data) => ({ type: SET_STREETS, payload: data })
export const setHousesAC = (data) => ({ type: SET_HOUSES, payload: data })
export const setFlatsAC = (data) => ({ type: SET_FLATS, payload: data })
export const setIsLoadingAC = (bool) => ({ type: SET_IS_LOADING, payload: bool })
export const setFetchingErrorAC = (error) => ({ type: SET_FETCHING_ERROR, payload: error })


