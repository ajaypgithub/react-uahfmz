import React, { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  const handleOnsubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  const handleTerm = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleOnsubmit}>
        <label htmlFor="">Search Image</label>
        <input type="text" value={term} onChange={handleTerm} />
      </form>
    </div>
  );
};

export default SearchBox;
