import React, { useState } from 'react';
import './style.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import SearchImages from './api';
function App() {
  const handleSubmit = (term) => {
    SearchImages(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
}

export default App;
