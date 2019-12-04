import React from 'react';
import styled from 'styled-components'
import Pokedex from './Pokedex';

const Header = styled.div`
  text-align: center;
`

const Title = styled.div`
  color: gray;
  font-size: 20px;
  font-weight: 900;
`

const App: React.FC = () => {
  return (
    <>
      <Header>
        <Title>Pokedex</Title>
      </Header>
      <Pokedex />
    </>
  );
}

export default App;
