import { Card } from "../card/Card";

export const Gallery = ({ dogImages, breedName }: Gallery) => {
  return (
    <div>
      <h1>{breedName}</h1>

      {dogImages && dogImages.length ? (
        dogImages.map((img, index) => {
          return <Card key={index} image={img} />;
        })
      ) : (
        <p>¡No hay perritos!</p>
      )}
    </div>
  );
};

interface Gallery {
  dogImages?: string[];
  breedName?: string;
}
