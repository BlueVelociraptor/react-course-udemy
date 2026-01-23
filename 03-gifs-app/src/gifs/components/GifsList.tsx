import type { Gif } from "../interfaces/gif.interface";

interface Props {
  GIFs: Gif[];
}

export const GifsList = ({ GIFs }: Props) => {
  return (
    <div className="gifs-container">
      {GIFs.map((GIF) => (
        <div key={GIF.id} className="gif-card">
          <img src={GIF.url} alt={GIF.title} />
          <h3>{GIF.title}</h3>

          <p>
            {GIF.width}x{GIF.height} (1.5MB)
          </p>
        </div>
      ))}
    </div>
  );
};
