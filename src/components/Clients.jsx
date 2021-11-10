import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addClientAction, deleteClientAction, editClientAction } from "../actions/actions";
import Client from "./Client";
import ModalAddClient from "./ModalAddClient";
import ModalClientInfo from "./ModalClientInfo";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 20px;
`
const Adress = styled.h3`
   color: #444;
`
const Content = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: center;
   gap: 20px;
`
const Button = styled.button`
   padding: 10px 20px;
   border-radius: 10px;
   background: beige;
   font-size: 1.1em;
   cursor: pointer;
`

const Clients = ({ clients, isLoading, fetchingError, adress }) => {
   const dispatch = useDispatch()
   const [isActiveAddClient, setIsActiveAddClient] = useState(false)
   const [activeClient, setActiveClient] = useState([])
   const [isActiveModalClient, setIsActiveModalClient] = useState(false)

   const onSubmit = (data) => {
      dispatch(addClientAction(data, adress.adreesId))
   }

   const deleteClient = (id) => {
      dispatch(deleteClientAction(id, adress.adreesId))
   }

   const editClientInfo = (id, data) => {
      dispatch(editClientAction(id, data, adress.adreesId))
   }

   if (!clients) {
      return <div>Выберите адрес</div>
   }
   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchingError) {
      return <div>Some error</div>
   }
   return (
      <>
         <Container>
            <Adress>ул. {adress.street}, дом {adress.house}, кв./офис {adress.flat}</Adress>
            <Content>
               {clients.length
                  ? clients.map(item => {
                     return <Client item={item} setActiveClient={setActiveClient} setActive={setIsActiveModalClient} key={item.id} />
                  })
                  : <div>Нет клиентов</div>}
               <Button onClick={() => { setIsActiveAddClient(true) }} >Добавить клиента</Button>
            </Content>
         </Container>
         <ModalAddClient active={isActiveAddClient} setActive={setIsActiveAddClient} onSubmit={onSubmit} />
         <ModalClientInfo editClient={editClientInfo} active={isActiveModalClient} setActive={setIsActiveModalClient} clientData={activeClient} deleteClient={deleteClient} />
      </>
   )


}

export default Clients