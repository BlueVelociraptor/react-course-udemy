export default function MyAwesomeApp() {
  const firstName = "Alina";
  const lastName = "Tsvetkov";

  const favoriteCharacters = ["Interrogación", "ShellcolGG", "Alina Tsvetkov"];

  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      {favoriteCharacters.map((character) => (
        <p>{character}</p>
      ))}
    </>
  );
}
