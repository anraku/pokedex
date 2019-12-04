import React from 'react'
import styled from 'styled-components';

export interface PokeCardProps {
  id: number
  name: string
  type: string
  base_experience: number
}

const Tile = styled.div`
  background-color: #CDCDCD;
  width: 150px;
  height: 200px;
  text-align: center;
  border-radius: 10px;
  margin: 30px;
`;

const Title = styled.div`
  color: blue;
  font-weight: 900;
`

const Pokecard: React.FC<PokeCardProps> = ({id, name, type, base_experience}) => {
  return (
    <>
      <Tile>
        <Title>{name}</Title>
        <img alt={name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </Tile>
    </>
  )
}

export default Pokecard;
