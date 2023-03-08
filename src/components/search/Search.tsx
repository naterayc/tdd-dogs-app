export const Search = ({
  search,
  handleSearch,
  handleChangeBreeds,
}: SearchBreedsProps) => {
  return (
    <div>
      <input
        type="search"
        placeholder="buscar por raza"
        id=""
        name=""
        onChange={handleSearch}
        list="perritos"
      />
      <datalist id="perritos">
        {search?.map((breed) => {
          return (
            <option key={breed} value={breed}>
              {breed}
            </option>
          );
        })}
      </datalist>
      {/* <button onClick={handleChangeBreeds}> buscar</button> */}
    </div>
  );
};
interface SearchBreedsProps {
  search?: string[];
  handleSearch: (e: any) => void;
  handleChangeBreeds: (e: any) => void;
}
