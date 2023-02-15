export const Select = ({ breeds }: SelectProps) => {
  return (
    <div>
      <select>
        <option defaultValue={"Elige una raza"}>Elige una raza</option>
        {breeds && breeds.length ? (
          breeds.map((breed, index) => {
            return <option key={index}>{breed.toUpperCase()}</option>;
          })
        ) : (
          <option>No hay ningun perrito :/</option>
        )}
      </select>
    </div>
  );
};

interface SelectProps {
  breeds?: string[];
}
