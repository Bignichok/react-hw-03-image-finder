import React from "react";
import T from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onSetBigImageUrl }) =>
  images.length > 0 && (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          imageSrc={webformatURL}
          alt={tags}
          bigImgUrl={largeImageURL}
          onSetBigImageUrl={onSetBigImageUrl}
        />
      ))}
    </ul>
  );

ImageGallery.defaultProps = {
  images: [],
  onSetBigImageUrl: () => {},
};

ImageGallery.propTypes = {
  images: T.array,
  onSetBigImageUrl: T.func,
};
export default ImageGallery;
