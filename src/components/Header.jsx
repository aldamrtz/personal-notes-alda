import React from 'react';
import SearchInput from './SearchInput';

const Header = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <header className="note-app__header">
      <h1>Personal Notes</h1>
      <div className="note-search">
        <SearchInput
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </div>
    </header>
  );
};

export default Header;