import React ,{useState,useEffect} from 'react';
import PokemonThumbnail from './components/PokemonThumbnail';


function App() {
  
  const [allPokemons,setAllPokemons] = useState([])
  const [loadMore,setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20')

  const getAllPokemons = async ()=> {
    const res = await fetch(loadMore)
    const data = await res.json()
    
    setLoadMore(data.next)
    
    function createPokemonObject(result){
      result.forEach(async pokemon => {
        const res = await fetch( `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList,data])
        console.log(result)
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  },[])


  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className = "pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon,index) => 
            <PokemonThumbnail
            key={index}
            id={pokemon.id}
            image={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            />
            )}
        </div>
        <button className="load-more"  onClick={() => getAllPokemons()}>Load more </button>
      </div>
    </div>
  );
}

export default App;
