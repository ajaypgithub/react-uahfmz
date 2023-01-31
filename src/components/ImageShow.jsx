import React, { useState } from 'react';

const ImageShow = ({ image }) => {
  
  return (
    <div>
      <img src={image.urls.thumb} alt="" />
    </div>
  );
};

export default ImageShow;
