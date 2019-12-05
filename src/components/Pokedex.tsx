import React from 'react'
import styled from 'styled-components';
import Pokecard, { Pokemon } from './Pokecard'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export interface Pokemons {
  pokemons: Pokemon[]
  exp: number
  winner: boolean
}

const Header = styled.div`
  text-align: left;
`

const Title = styled.div`
  color: gray;
  font-size: 20px;
  font-weight: 900;
`

const Pokedex: React.FC<Pokemons> = ({ pokemons, exp, winner }) => {
  return (
    <>
      <Header>
        <Title>Pokedex!</Title>
        <p>Total Exp: {exp}</p>
        <p>{winner ? 'Win!' : 'Lose'}</p>
      </Header>
      <Container>
        {pokemons.map((pokemon, index) =>
          <Pokecard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        )}
      </Container>
    </>
  )
}

export default Pokedex;
