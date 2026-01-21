import { GifsList } from "./gifs/components/GifsList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

const searches: string[] = ["Jack Calavera", "Interrogacion", "Shellcol GG"];

export const GifsApp = () => {
  return (
    <>
      {/* Header */}

      <CustomHeader
        title="Buscador de GIFs"
        description="Descubre y comparte el GIF perfecto"
      />

      {/* Search */}
      <SearchBar inputPlaceholder="Buscar GIFs" />

      {/* Busquedas Previas */}
      <PreviousSearches searches={searches} />

      {/* Gifs */}

      <GifsList GIFs={mockGifs} />
    </>
  );
};
