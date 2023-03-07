export const Tags = ({selected, handleRemove}: TagsProps) => {
    return (
        <div>
        {selected && selected.map((dogs) => {
          return (
            <p key={dogs}>
              {dogs}
              <span data-testid='delete-icon'
                onClick={handleRemove}
              >
                {' '}X
              </span>
            </p>
          );
        })}
      </div>
    )
}

interface TagsProps {
    selected?: string[];
    handleRemove: () => void;
}