export const DataTableSearchInput = (props) => {
    const {search, handleSearch, placeholder } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="form-control mb-4 w-100 "
      value={search}
      onChange={handleSearch}
    />
  );
};
