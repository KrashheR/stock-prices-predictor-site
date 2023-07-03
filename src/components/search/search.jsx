import React from "react";
import { StyledInput } from "./styled";

function Search({ searchTerm, setSearchTerm }) {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      return (
        <StyledInput type="text" placeholder="Поиск..." value={searchTerm} onChange={handleSearchChange} />
      );
}

export default Search;