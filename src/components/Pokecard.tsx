import React from 'react'
import styled from 'styled-components';

export interface Pokemon {
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
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
`;

const Title = styled.div`
  color: blue;
  font-weight: 900;
  font-size: 30px;
  margin-bottom: 1rem;
`

const Description = styled.div`
  font-size: 20px;
  margin-top: 20px;
`

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: #eceff1;
  border-radius: 3px;
  margin-bottom: 1rem;

  img {
    transition: all ease 500ms;
  }

  img:hover {
    transform: scale(1.25);
    opacity: 0.7;
  }
`

const Pokecard: React.FC<Pokemon> = ({id, name, type, base_experience}) => {
  const number = id.toString().padStart(3, '0');
  return (
    <Tile>
      <Title>{name}</Title>
      <Image>
        <img alt={name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${number}.png`} />
      </Image>
      <Description>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </Description>
    </Tile>
  )
}

export default Pokecard;
