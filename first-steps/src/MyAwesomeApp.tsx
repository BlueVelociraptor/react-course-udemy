import type { CSSProperties } from "react";

const firstName = "Alina";
const lastName = "Tsvetkov";
const isActive = true;

const favoriteCharacters = ["Interrogación", "ShellcolGG", "Alina Tsvetkov"];
const myStyles: CSSProperties = {
  backgroundColor: isActive ? "green" : "red",
  borderRadius: 5,
  padding: 5,
  marginTop: 220,
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      {favoriteCharacters.map((character) => (
        <p>{character}</p>
      ))}

      <h3>{isActive ? "Activo" : "Inactivo"}</h3>

      <p style={myStyles}>Hola</p>
    </>
  );
}
