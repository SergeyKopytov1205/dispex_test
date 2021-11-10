import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import useFilterSearch from "../hooks/useFilterSearch";
import { getClients, getFlat, getHouse, getStreet } from "../actions/actions";
import SearchBox from "./SearchBox";
import { useDispatch } from "react-redux";
import { setAdressAC } from "../reducers/clientsReducer";

const SearchStyle = styled.div`
    width: 100%;
    padding-bottom: 30px;
    border-bottom: 2px solid #ccc;
  `
const Header = styled.h1`
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #333;
  `
const Content = styled.div`
    display: flex;
    column-gap: 30px;
  `

const Search = ({ streets, houses, flats }) => {
   const [{ filteredData: filteredStreet, value: valueStreet, validateError: validateStreet }, handleFilterStreet, handleChoiсeStreet] = useFilterSearch(streets)
   const [{ filteredData: filteredHouse, value: valueHouse, validateError: validateHouse }, handleFilterHouse, handleChoiсeHouse] = useFilterSearch(houses)
   const [{ filteredData: filteredFlat, value: valueFlat, validateError: validateFlat }, handleFilterFlat, handleChoiсeFlat] = useFilterSearch(flats)
   const dispatch = useDispatch()
   const [activeStreet, setActiveStreet] = useState(null)
   const [activeHouse, setActiveHouse] = useState(null)
   const [activeFlat, setActiveFlat] = useState(null)

   useEffect(() => {
      dispatch(getStreet())
   }, [dispatch])

   useEffect(() => {
      if (activeStreet) {
         dispatch(getHouse(activeStreet.id))
      }
   }, [activeStreet, dispatch])

   useEffect(() => {
      if (activeHouse) {
         dispatch(getFlat(activeHouse.id))
      }
   }, [activeHouse, dispatch])

   useEffect(() => {
      if (activeFlat && activeStreet && activeHouse) {
         dispatch(getClients(activeFlat.id))
         dispatch(setAdressAC({
            adreesId: activeFlat.id,
            street: activeStreet.name,
            house: activeHouse.name,
            flat: activeFlat.name
         }))
      }
   }, [activeFlat, activeStreet, activeHouse, dispatch])
   return (
      <SearchStyle>
         <Header>
            Адрес:
         </Header>
         <Content>
            <SearchBox validate={validateStreet} choiseItem={setActiveStreet} handleFilter={handleFilterStreet} value={valueStreet} filteredData={filteredStreet} handleChoiсe={handleChoiсeStreet} text='Улица' />
            <SearchBox validate={validateHouse} choiseItem={setActiveHouse} handleFilter={handleFilterHouse} value={valueHouse} filteredData={filteredHouse} handleChoiсe={handleChoiсeHouse} text='Дом' />
            <SearchBox validate={validateFlat} choiseItem={setActiveFlat} handleFilter={handleFilterFlat} value={valueFlat} filteredData={filteredFlat} handleChoiсe={handleChoiсeFlat} text='Кв./офис' />
         </Content>
      </SearchStyle>
   )
}

export default Search