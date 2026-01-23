import { GifsList } from "./gifs/components/GifsList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

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
