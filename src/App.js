import React, { useState } from 'react';
import './style.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import SearchImages from './api';
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
    console.log(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
