



const Filter = ({ searchedName, handleSearchChange }) => {
  return (
    <div>
      filter shown with:
      <input value={searchedName} onChange={handleSearchChange}></input>
    </div>
  );
};



export default Filter;