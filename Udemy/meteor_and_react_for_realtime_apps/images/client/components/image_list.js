import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {
  const RenderedImages = props.images.map(image =>
    <ImageDetail key={image.id} image={image.url} />
  );
  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

export default ImageList;