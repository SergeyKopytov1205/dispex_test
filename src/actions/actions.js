import { addClient, bindClient, deleteClient, getData, editClient } from "../api/api"
import { setClientsAC, setFetchingErrorClientsAC, setIsLoadingClientsAC } from "../reducers/clientsReducer"
import { setFetchingErrorAC, setFlatsAC, setHousesAC, setIsLoadingAC, setStreetsAC } from "../reducers/housesReducer"

export const getStreet = () => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingAC(true))
         const response = await getData('/Request/streets')
         dispatch(setStreetsAC(response))
      } catch (error) {
         dispatch(setFetchingErrorAC(error))
         dispatch(setIsLoadingAC(false))
      }
   }
}

export const getHouse = (id) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingAC(true))
         const response = await getData(`/Request/houses/${id}`)
         dispatch(setHousesAC(response))
      } catch (error) {
         dispatch(setFetchingErrorAC(error))
         dispatch(setIsLoadingAC(false))
      }
   }
}

export const getFlat = (id) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingAC(true))
         const response = await getData(`/Request/house_flats/${id}`)
         dispatch(setFlatsAC(response))
      } catch (error) {
         dispatch(setFetchingErrorAC(error))
         dispatch(setIsLoadingAC(false))
      }
   }
}

export const getClients = (id) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingClientsAC(true))
         const response = await getData(`/HousingStock/clients?addressId=${id}`)
         dispatch(setClientsAC(response))
      } catch (error) {
         dispatch(setFetchingErrorClientsAC(error))
         dispatch(setIsLoadingClientsAC(false))
      }
   }
}

export const addClientAction = (data, flatId) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingClientsAC(true))
         const responseAdd = await addClient('/HousingStock/client', data)
         await bindClient('/HousingStock/bind_client', flatId, responseAdd.id)
         const response = await getData(`/HousingStock/clients?addressId=${flatId}`)
         dispatch(setClientsAC(response))
      } catch (error) {
         dispatch(setFetchingErrorClientsAC(error))
         dispatch(setIsLoadingClientsAC(false))
      }
   }
}

export const deleteClientAction = (id, flatId) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingClientsAC(true))
         await deleteClient(id)
         const response = await getData(`/HousingStock/clients?addressId=${flatId}`)
         dispatch(setClientsAC(response))
      } catch (error) {
         dispatch(setFetchingErrorClientsAC(error))
         dispatch(setIsLoadingClientsAC(false))
      }
   }
}

export const editClientAction = (id, data, flatId) => {
   return async (dispatch) => {
      try {
         dispatch(setIsLoadingClientsAC(true))
         await editClient(id, data)
         const response = await getData(`/HousingStock/clients?addressId=${flatId}`)
         dispatch(setClientsAC(response))
      } catch (error) {
         dispatch(setFetchingErrorClientsAC(error))
         dispatch(setIsLoadingClientsAC(false))
      }
   }
}