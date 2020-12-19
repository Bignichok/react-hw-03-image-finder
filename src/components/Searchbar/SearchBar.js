import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import T from "prop-types";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={({ target }) => setInputValue(target.value)}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
        />
      </form>
    </header>
  );
};

SearchBar.defaultProps = {
  onSubmit: () => {},
};

SearchBar.propTypes = {
  onSubmit: T.func,
};

export default SearchBar;
