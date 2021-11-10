import * as axios from 'axios';

const instance = axios.default.create({
   baseURL: 'https://dispex.org/api/vtest'
})

export async function getData(url) {
   const response = await instance.get(url)
   return response.data
}

export async function addClient(url, data) {
   const response = await instance.post(url, data)
   return response.data
}
export async function bindClient(url, flatId, clientId) {
   const response = await instance.put(url, {
      AddressId: flatId,
      ClientId: clientId
   })
   return response.data
}
export async function deleteClient(id) {
   const response = await instance.delete(`/HousingStock/bind_client/${id}`)
   return response.data
}
export async function editClient(id, data) {
   const response = await instance.put(`/HousingStock/bind_client/${id}`, data)
   return response.data
}