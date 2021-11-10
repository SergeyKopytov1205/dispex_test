import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Input } from "./styledForm";

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
`

const ModalAddClient = ({ active, setActive, onSubmit }) => {
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
      onSubmit(data)
      setActive(false)
   }

   return (
      <Container onClick={() => { setActive(false) }} active={active}>
         <Content onClick={(e) => { e.stopPropagation() }}>
            <Form onSubmit={handleSubmit}>
               <h1>Введите данные клиента</h1>
               <label htmlFor="">Имя:<Input value={name} onChange={(e) => { setName(e.target.value) }} type="text" /></label>
               <label htmlFor="">Телефон:<Input required value={phone} onChange={(e) => { setPhone(e.target.value) }} type="text" /></label>
               <label htmlFor="">Email:<Input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" /></label>
               <Button>Добавить</Button>
            </Form>
         </Content>
      </Container>
   )
}

export default ModalAddClient