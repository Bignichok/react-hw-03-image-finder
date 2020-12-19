import React, { useEffect, useState } from "react";

import { imagesApi } from "./utils/imagesApi";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/Searchbar/SearchBar";
import Preloader from "./components/Preloader/Preloader";
import Modal from "./components/Modal/Modal";

import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [largeImgUrl, setLargeImgUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;
    fetchImages();
    searchError && setSearchError(false);
  }, [searchQuery]);

  useEffect(() => {
    smoothScroll();
  }, [pageNumber]);

  const fetchImages = () => {
    setLoading(true);
    imagesApi(searchQuery, pageNumber)
      .then(({ hits }) => {
        if (!hits.length) {
          setSearchError(true);
          return;
        }
        setImages((prevImages) => [...prevImages, ...hits]);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const handleSearchFormSubmit = (query) => {
    setSearchQuery(query);
    setPageNumber(1);
    setImages([]);
  };

  const setBigImageUrl = (url) => {
    setLargeImgUrl(url);
    if (url) window.addEventListener("keydown", closeModal);
  };

  const smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const closeModal = ({ code, target }) => {
    window.removeEventListener("keydown", closeModal);
    if (code === "Escape" || target.src !== largeImgUrl) setLargeImgUrl(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchFormSubmit} />
      <ImageGallery onSetBigImageUrl={setBigImageUrl} images={images} />
      {searchError && <p>Sorry, no matches were found for your query. Try again!</p>}
      {loading && <Preloader />}
      {images.length > 14 && !loading && (
        <Button text="Load more" clickHandler={fetchImages} />
      )}
      {largeImgUrl && (
        <Modal onCloseModal={closeModal}>
          <img src={largeImgUrl} alt="modalImg"></img>
        </Modal>
      )}
    </div>
  );
};

export default App;
