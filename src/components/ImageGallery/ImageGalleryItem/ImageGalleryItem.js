import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ imageSrc, alt, bigImgUrl, onSetBigImageUrl }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => onSetBigImageUrl(bigImgUrl)}>
      <img src={imageSrc} alt={alt} className={styles.ImageGalleryItemImage} />
    </li>
  );
};
export default ImageGalleryItem;
