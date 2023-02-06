export const Card = ({ image }: Card) => (
    <div>
        <img src={image} alt="dog" />
    </div>
);

interface Card {
    image: string
};
