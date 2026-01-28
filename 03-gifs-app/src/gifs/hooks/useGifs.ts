import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState(["jack calavera"]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

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
      gifsCache.current[query] = gifsList;
      setGifs(gifsList);
      console.log(gifsCache);
    }
  };

  return {
    gifs,
    previousTerms,
    handleTermClicked,
    handleSearch,
  };
};
