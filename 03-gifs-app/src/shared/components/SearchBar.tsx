interface Props {
  inputPlaceholder?: string;
}

export const SearchBar = ({ inputPlaceholder = "Buscar" }: Props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={inputPlaceholder} />
      <button>Buscar</button>
    </div>
  );
};
