import React from "react";
import { useState, useCallback } from "react";

export const SearchInput = ({ data }) => {
  const { search, setSearch } = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const placeholder = "search....";

  const handleSearch = useCallback(
    (event) => {
      setSearch(event.target.value);

      const newData = data.filter((row) => {
        return row.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      setFilteredData(newData);
    },
    [data, setSearch]
  );
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="form-control mb-4 w-100"
      value={search}
      onChange={handleSearch}
    />
  );
};
