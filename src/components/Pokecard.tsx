import React from 'react'
import styled from 'styled-components';

export interface PokeCardProps {
  id: number
  name: string
  type: string
  base_experience: number
}

const Tile = styled.div`
  background-color: white;
  width: 250px;
  height: 400px;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  margin: 1rem;
  box-shadow: 5px 7px 15px -5px rgba(0, 0, 0, 0.56);
`;

const Title = styled.div`
  color: blue;
  font-weight: 900;
  font-size: 30px;
`

const Description = styled.div`
  font-size: 20px;
  margin-top: 50px;
`

const Pokecard: React.FC<PokeCardProps> = ({id, name, type, base_experience}) => {
  const number = id.toString().padStart(3, '0');
  return (
    <Tile>
      <Title>{name}</Title>
      <img alt={name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${number}.png`} />
      <Description>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </Description>
    </Tile>
  )
}

export default Pokecard;
