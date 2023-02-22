export const SelectBreeds = ({
  breeds,
  handleChangeBreeds,
}: SelectBreedsProps) => {
  return (
    <div>
      <select onChange={handleChangeBreeds}>
        <option defaultValue={"Elige una raza"}>Elige una raza</option>
        {breeds && breeds.length ? (
          breeds.map((breed, index) => {
            return <option key={index}>{breed}</option>;
          })
        ) : (
          <option>No hay ningun perrito :/</option>
        )}
      </select>
    </div>
  );
};

interface SelectBreedsProps {
  breeds?: string[];
  handleChangeBreeds: (e: any) => void;
}
