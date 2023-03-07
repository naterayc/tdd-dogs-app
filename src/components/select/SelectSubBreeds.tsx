export const SelectSubBreeds = ({
  subBreeds,

  handleChangeSubBreed,
}: SelectSubBreedsProps) => {
  return (
    <>
      <select data-testid="selectSubBreed" onChange={handleChangeSubBreed}>
        <option defaultValue={"subrazas"}>subrazas</option>
        {subBreeds && subBreeds.length ? (
          subBreeds.map((subBreed, index) => {
            return <option key={index}>{subBreed}</option>;
          })
        ) : (
          <option>No hay subrazas :/</option>
        )}
      </select>
    </>
  );
};
interface SelectSubBreedsProps {
  subBreeds?: string[];

  handleChangeSubBreed: (e: any) => void;
}
