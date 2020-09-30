import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import T from "prop-types";

const ImageGallery = ({ images, onSetBigImageUrl }) => {
  const imageGalleryItems = images.map((img) => (
    <ImageGalleryItem
      key={img.id}
      imageSrc={img.webformatURL}
      alt={img.tags}
      bigImgUrl={img.largeImageURL}
      onSetBigImageUrl={onSetBigImageUrl}
    />
  ));
  return <ul className={styles.ImageGallery}>{imageGalleryItems}</ul>;
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
