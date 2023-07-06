import React from "react";
import SearchPanel from "../search-panel/search-panel";
import Filters from "../filters/filters";
import "./nav.css"

const Nav = ({ onSearchChange, filter, onFilterChange }) => {
  return (
    <div className = 'navigation'>
      <SearchPanel onSearchChange = {onSearchChange}/>
      <Filters filter = { filter }
               onFilterChange = {onFilterChange}/>
    </div>
  );
};

export default Nav;