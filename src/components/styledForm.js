import styled from "styled-components";

export const Button = styled.button`
   padding: 10px 20px;
   border-radius: 10px;
   background: ${props => props.remove ? 'red' : 'blue'};
`
export const Form = styled.form`
   display:flex;
   flex-direction: column;
   gap: 10px;
`
export const Input = styled.input`
   width: 100%;
   padding: 5px 10px;
   border-radius: 10px;
`