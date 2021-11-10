import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./styledForm";


const Container = styled.div`
   position: relative;
   &:first-child{
      width: 400px;
   }
`
const List = styled.ul`
   width: 100%;
   position: absolute;
   top: 50px;
   background: #ddd;
   max-height: ${props => props.isActive ? '300px' : '0'};
   overflow-y: scroll;
   border-radius: 10px;
`
const Item = styled.li`
   list-style: none;
   margin: 5px 10px;
   &:hover{
      background: #FFF;
   }
`

const SearchBox = ({ filteredData, text, handleFilter, handleChoiсe, value, choiseItem }) => {
   const [isActive, setActive] = useState(false)

   const handleFocus = (bool) => {
      setActive(bool)
   }

   return (
      <Container onFocus={() => { handleFocus(true) }}  >
         <Input value={value} type="text" placeholder={text} onChange={handleFilter} />
         <List isActive={isActive} >
            {filteredData.map((item) => {
               return <Item onClick={() => { handleChoiсe(item.name); choiseItem(item); handleFocus(false) }} key={item.id} >{item.name}</Item>
            })}
         </List>
      </Container>
   )
}


export default SearchBox