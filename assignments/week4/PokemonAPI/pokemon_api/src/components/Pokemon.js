import { useEffect, useState } from 'react';
import axios from 'axios';

export const Pokemon = () => {

  const [pokemon, setPokemon] = useState(null);
  

  useEffect(() => {
    // fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
    //       .then(response => response.json())
    //       .then(response => setPokemon(response.results))

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response=>{setPokemon(response.data)})
  },[]);  

  console.log(pokemon.results)

  return (
    <div>
      <div>
        <h1>Pokemon</h1>
      </div>
      <div>
        {
          pokemon.results.map((obj, index) => {
            return(
              <h3 key={index}>Name: {obj.name}</h3>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pokemon;