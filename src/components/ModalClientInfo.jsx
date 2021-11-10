import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Button } from './styledForm'

const Container = styled.div`
   position:absolute;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background: rgba(0,0,0,0.6);
   display: flex;
   justify-content: center;
   align-items: center;
   transition: 0.2s;
   pointer-events: ${props => props.active ? 'all' : 'none'};
   opacity: ${props => props.active ? '1' : '0'};
`
const Content = styled.div`
   padding: 20px;
   border-radius:10px;
   background: #fff;
   display:flex;
   flex-direction: column;
   gap: 10px;
`
const Name = styled.h4`
   color: #555;
   font-size: 2em;
`
const Phone = styled.div`
   font-size: 1.5em;
`
const Email = styled.div`
   font-size: 1.5em;
`
const Control = styled.div`
   display: flex;
   justify-content: space-between;
   column-gap: 30px;
`

const ModalClientInfo = ({ active, setActive, clientData, deleteClient, editClient }) => {
   const [editMode, setEditMode] = useState(false)
   const [email, setEmail] = useState('')
   const [name, setName] = useState('')
   const [phone, setPhone] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      const data = {
         Name: name,
         Phone: phone,
         Email: email
      }
      editClient(clientData.bindId, data)
      setActive(false)
   }

   return (
      <Container onClick={() => { setActive(false) }} active={active}>
         <Content onClick={(e) => { e.stopPropagation() }}>
            {!editMode && (
               <>
                  <Name>
                     Имя: {clientData.name}
                  </Name>
                  <Phone>
                     Телефон: {clientData.phone}
                  </Phone>
                  <Email>
                     Email: {clientData.email}
                  </Email>
                  <Control>
                     <Button onClick={() => { setEditMode(true) }}>
                        Изменить
                     </Button>
                     <Button remove onClick={() => { deleteClient(clientData.bindId); setActive(false) }}>
                        Удалить
                     </Button>
                  </Control>
               </>
            )}
            {editMode && (
               <>
                  <Form onSubmit={handleSubmit} >
                     <label htmlFor="">Имя:<Input value={name} onChange={(e) => { setName(e.target.value) }} type="text" /></label>
                     <label htmlFor="">Телефон:<Input required value={phone} onChange={(e) => { setPhone(e.target.value) }} type="text" /></label>
                     <label htmlFor="">Email:<Input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" /></label>
                     <Button disabled >
                        Изменить данные
                     </Button>
                  </Form>
                  <Button remove onClick={() => { setEditMode(false) }} >
                     Отменить
                  </Button>
               </>
            )}
         </Content>
      </Container>
   )
}
export default ModalClientInfo