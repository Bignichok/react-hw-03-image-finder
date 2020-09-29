import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

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
export default ImageGallery;
