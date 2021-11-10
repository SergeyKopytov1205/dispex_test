import React from "react";
import styled from "styled-components";

const Container = styled.div`
   padding: 10px;
   border-radius: 10px;
   border: 2px solid #ddd;
   display:flex;
   flex-direction: column;
   gap: 10px;
`
const Name = styled.h4`
   color: #555;
   font-size: 1.2em;
`
const Phone = styled.div`
   font-size: 1em;
`
const Email = styled.div`
   font-size: 1em;
`

const Client = ({ item, setActive, setActiveClient }) => {
   return (
      <Container onClick={() => { setActive(true); setActiveClient(item) }}>
         <Name>
            Имя: {item.name}
         </Name>
         <Phone>
            Телефон: {item.phone}
         </Phone>
         <Email>
            Email: {item.email}
         </Email>
      </Container>
   )
}

export default Client