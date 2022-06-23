import styled from "styled-components";

export const CharactersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
`;
export const CharacterItem = styled.div`
  margin: 20px;
  padding: 10px;
  border: 2px solid tomato;
  width: 200px;
  height: 100px;
  color: tomato;
`;
export const CharactersFavorites = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
`;
