import React, { useState , useReducer , useMemo , useRef , useCallback } from "react";
import { CharactersContainer, CharacterItem, CharactersFavorites } from "./styles.characters";
import Search from '../Search'
import useCharacters from "../../Hooks/useCharacters";

const API ='https://www.breakingbadapi.com/api/characters?limit=10&offset=0';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API)

  //handleClick usando reducer
  const handleClick = (favorite) =>
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: favorite,
    });

//buscador
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };
  //BUSCADOR  CON USE CALLBACK
  const handleSearch = useCallback(()=>{
    setSearch(searchInput.current.value)
  },[]);


  // const filteredUsers = characters.filter((user)=>{
    //   return user.name.toLowerCase().includes(search.toLowerCase())
    // })
    //Ambos códigos hacen lo mismo, el segundo usando useMemo.
  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <>
      <CharactersFavorites>
        <h3>
          <em>Personajes favoritos </em>
        </h3>
        {favorites.favorites.map((favorite) => (
          <ol key={favorite.id}>{favorite.name}</ol>
        ))}
      </CharactersFavorites>

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>

      <CharactersContainer>
        {filteredUsers.map((character) => (
          <CharacterItem key={character.id}>
            <p>{character.name}</p>

            <button type="button" onClick={() => handleClick(character)}>
              Agregar a favoritos
            </button>
          </CharacterItem>
        ))}
      </CharactersContainer>
    </>
  );
};

export default Characters;
