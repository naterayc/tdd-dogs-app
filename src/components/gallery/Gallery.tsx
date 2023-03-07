import { Card } from "../card/Card";
import { Spinner } from "../spinner/Spinner";

export const Gallery = ({ imageBreeds, isLoading }: GalleryProps) => {
  return (
    <>
      {isLoading ? <Spinner /> :
        <div>
          {imageBreeds && imageBreeds.length ? (
            imageBreeds.map((img, index) => {
              return <Card data-testid='container-img' key={index} image={img} />;
            })
          ) : (
            <p>Busca tu perrito</p>
          )}
        </div>
      }
    </>
  );
};

interface GalleryProps {
  imageBreeds?: string[];
  isLoading: boolean;
}
