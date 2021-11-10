import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'
import Clients from "./Clients";
import Search from "./Search";

const Container = styled.div`
    max-width: 1140px;
    margin: 40px auto;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px #aaa;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 30px;
  `

const App = () => {

  const streets = useSelector(state => state.houses.streets)
  const houses = useSelector(state => state.houses.houses)
  const flats = useSelector(state => state.houses.flats)
  const clients = useSelector(state => state.clients)

  return (
    <Container>
      <Search streets={streets} houses={houses} flats={flats} />
      <Clients adress={clients.adress} clients={clients.clients} isLoading={clients.isLoading} fetchingError={clients.fetchingError} />
    </Container>
  );
}

export default App;
