import React from 'react';

const SearchInput = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <div className="note-search">
      <input
        id="CariCatatan"
        type="text"
        placeholder="Search Notes"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;