import React, { useState } from 'react';
import axios from 'axios';

const SearchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos/', {
    headers: {
      Authorization: 'Client-ID PF6NIzGIaCMZIRZuxus2xJD4yjNkaV9PX9pSvb5prOw',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default SearchImages;
