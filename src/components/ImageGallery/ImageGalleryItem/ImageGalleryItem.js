import React from "react";
import styles from "./ImageGalleryItem.module.css";
import T from "prop-types";

const DEFAULT_IMG =
  "https://lh3.googleusercontent.com/proxy/TrqqKK7SJGwfYojUnyGfJA_3L0v2P-1euh2qsq88Xc0CAgIyD1Zg6Fu_qAgjRNGgLOVQvnS7-IbMb3Rk139R5ma_ll61FGTFmWo9qA";

const ImageGalleryItem = ({ imageSrc, alt, bigImgUrl, onSetBigImageUrl }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => onSetBigImageUrl(bigImgUrl)}>
      <img src={imageSrc} alt={alt} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  imageSrc: DEFAULT_IMG,
  bigImgUrl: DEFAULT_IMG,
  alt: "photo",
  onSetBigImageUrl: () => {},
};

ImageGalleryItem.propTypes = {
  imageSrc: T.string,
  bigImgUrl: T.string,
  alt: T.string,
  onSetBigImageUrl: T.func,
};

export default ImageGalleryItem;
