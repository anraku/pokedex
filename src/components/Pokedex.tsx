import React from 'react'
import styled from 'styled-components';
import Pokecard, { Pokemon } from './Pokecard'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Header = styled.div`
  text-align: center; 
`

const PokedexWinner = styled.h1`
  color: #4caf50;
`

const PokedexLoser = styled.h1`
  color: #e91e63;
`

export interface Pokemons {
  pokemons: Pokemon[]
  exp: number
  winner: boolean
}

const Pokedex: React.FC<Pokemons> = ({ pokemons, exp, winner }) => {
  return (
    <>
      <Header>
        {winner ?
          <PokedexWinner>Winner!</PokedexWinner> :
          <PokedexLoser>Loser!</PokedexLoser>
        }
        <h4>Total Exp: {exp}</h4>
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
