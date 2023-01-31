import React from 'react';
import ImageShow from './ImageShow';

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />;
  });
  const style = {
    display: 'flex',
    flexWrap:'wrap'
  };

  return <div  style={style}>{renderedImages}</div>;
};

export default ImageList;
