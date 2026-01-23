import { useState } from "react";
import { GifsList } from "./gifs/components/GifsList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["jack calavera"]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = async (term: string) => {
    const gifsList = await getGifsByQuery(term);
    setGifs(gifsList);
  };

  const handleSearch = async (query: string) => {
    query = query.toLowerCase().trim();

    if (previousTerms.includes(query)) {
      return;
    }

    if (previousTerms.length === 8) {
      return;
    }

    if (query) {
      setPreviousTerms((value) => [query, ...value]);

      const gifsList = await getGifsByQuery(query);
      setGifs(gifsList);
    }
  };

  return (
    <>
      {/* Header */}

      <CustomHeader
        title="Buscador de GIFs"
        description="Descubre y comparte el GIF perfecto"
      />

      {/* Search */}
      <SearchBar onQuerySearch={handleSearch} inputPlaceholder="Buscar GIFs" />

      {/* Busquedas Previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}

      <GifsList GIFs={gifs} />
    </>
  );
};
