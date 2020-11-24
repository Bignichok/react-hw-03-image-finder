import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import T from "prop-types";

const ImageGallery = ({ images, onSetBigImageUrl }) => {
  return (
    !!images && (
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
    )
  );
};

ImageGallery.defaultProps = {
  images: [],
  onSetBigImageUrl: () => {},
};

ImageGallery.propTypes = {
  images: T.array,
  onSetBigImageUrl: T.func,
};
export default ImageGallery;
