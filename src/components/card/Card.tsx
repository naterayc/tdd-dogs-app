export const Card = ({ image }: CardProps) => (
    <div>
        <img src={image} alt="dog" />
    </div>
);

interface CardProps {
    image: string
};
