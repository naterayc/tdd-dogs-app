import { Card } from "../card/Card";

export const Gallery = ({ imageBreeds }: GalleryProps) => {
  return (
    <div>
      {imageBreeds && imageBreeds.length ? (
        imageBreeds.map((img, index) => {
          return <Card key={index} image={img} />;
        })
      ) : (
        <p>¡No hay perritos!</p>
      )}
    </div>
  );
};

interface GalleryProps {
  imageBreeds?: string[];
}
