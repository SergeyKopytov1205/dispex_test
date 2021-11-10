const SET_CLIENTS = 'SET_CLIENTS'
const SET_IS_LOADING_CLIENTS = 'SET_IS_LOADING_CLIENTS'
const SET_FETCHING_ERROR_CLIENTS = 'SET_FETCHING_ERROR_CLIENTS'
const SET_ADRESS = 'SET_ADRESS'

const initialState = {
   adress: null,
   clients: null,
   isLoading: false,
   fetchingError: null
}

export function clientsReducer(state = initialState, action) {
   switch (action.type) {
      case SET_CLIENTS:
         return { ...state, clients: action.payload, isLoading: false }
      case SET_IS_LOADING_CLIENTS:
         return { ...state, isLoading: action.payload }
      case SET_FETCHING_ERROR_CLIENTS:
         return { ...state, fetchingError: action.payload }
      case SET_ADRESS:
         return { ...state, adress: action.payload }
      default:
         return { ...state }
   }
}

export const setClientsAC = (data) => ({ type: SET_CLIENTS, payload: data })
export const setAdressAC = (data) => ({ type: SET_ADRESS, payload: data })
export const setIsLoadingClientsAC = (bool) => ({ type: SET_IS_LOADING_CLIENTS, payload: bool })
export const setFetchingErrorClientsAC = (error) => ({ type: SET_FETCHING_ERROR_CLIENTS, payload: error })