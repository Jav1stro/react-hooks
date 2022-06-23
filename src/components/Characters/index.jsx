import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";
import {
  CharactersContainer,
  CharacterItem,
  CharactersFavorites,
} from "./styles.characters";

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
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters?limit=10&offset=0")
      .then((resp) => resp.json())
      .then((data) => setCharacters(data));
  }, []);

  const handleClick = (favorite) =>
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: favorite,
    });

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  // const filteredUsers = characters.filter((user)=>{
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // })

  const filteredUsers = useMemo(()=>
    characters.filter((user)=>{
        return user.name.toLowerCase().includes(search.toLowerCase())
      }),
      [characters, search]
  )

  return (
    <>
      <CharactersFavorites>
        {favorites.favorites.map((favorite) => (
          <ol key={favorite.id}>{favorite.name}</ol>
        ))}
      </CharactersFavorites>

          <input type="text" value={search} onChange={handleSearch} />


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
