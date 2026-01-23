import { useEffect, useState } from "react";

interface Props {
  inputPlaceholder?: string;

  onQuerySearch: (search: string) => void;
}

export const SearchBar = ({
  inputPlaceholder = "Buscar",
  onQuerySearch,
}: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuerySearch(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  const handleSearch = () => {
    onQuerySearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={inputPlaceholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
