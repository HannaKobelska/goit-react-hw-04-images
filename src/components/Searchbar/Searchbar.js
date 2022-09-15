import { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from 'react-icons/fa';

import css from "../Searchbar/Searchbar.module.css";

export default function SearchBar( {onSubmit} ) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery("");
  };

   
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>
                        <FaSearch size = {25} />
            </span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            name="searchQuery"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={searchQuery}
          />
        </form>
      </header>
    );
  
}


SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };