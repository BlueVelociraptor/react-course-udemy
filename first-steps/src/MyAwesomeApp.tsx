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
    <div data-testid="div-app">
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <h3>Personajes favoritos:</h3>

      {favoriteCharacters.map((character) => (
        <p className="mi-clase-favorita" key={character}>
          {character}
        </p>
      ))}

      <h3>{isActive ? "Activo" : "Inactivo"}</h3>

      <p style={myStyles}>Hola</p>
    </div>
  );
}
