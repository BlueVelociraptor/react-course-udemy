import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
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

  return {
    gifs,
    previousTerms,
    handleTermClicked,
    handleSearch,
  };
};
