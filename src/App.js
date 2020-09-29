import React, { Component } from "react";
import { imagesApi } from "./utils/imagesApi";
import "./App.css";

import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/Searchbar/SearchBar";
import Preloader from "./components/Preloader/Preloader";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    pageNumber: 1,
    error: "",
    loading: false,
    largeImgUrl: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    const prevPage = prevState.pageNumber;
    const nextPage = this.state.pageNumber;

    const prevLargeImg = prevState.largeImgUrl;
    const nextLargeImg = this.state.largeImgUrl;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }

    if (prevPage !== nextPage) {
      this.smoothScroll();
    }

    if (nextLargeImg) window.addEventListener("keydown", this.closeModal);
    if (prevLargeImg) window.removeEventListener("keydown", this.closeModal);
  }

  fetchImages = () => {
    const { searchQuery, pageNumber } = this.state;
    this.setState({ loading: true });
    imagesApi(searchQuery, pageNumber)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images.hits],
          pageNumber: prevState.pageNumber + 1,
        }));
      })
      .catch((error) => this.setState({ error: error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, pageNumber: 1, images: [] });
  };

  setBigImageUrl = (url) => {
    this.setState({ largeImgUrl: url });
  };

  smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  closeModal = (e) => {
    if (e.code === "Escape") {
      this.setState({ largeImgUrl: null });
    } else if (e.target.src !== this.state.largeImgUrl) {
      this.setState({ largeImgUrl: null });
    }
  };

  render() {
    const { images, loading, largeImgUrl } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery onSetBigImageUrl={this.setBigImageUrl} images={images} />
        {loading && <Preloader />}
        {images.length > 0 && !loading && (
          <Button text="Load more" clickHandler={this.fetchImages} />
        )}
        {largeImgUrl && (
          <Modal onCloseModal={this.closeModal}>
            <img src={largeImgUrl} alt="modalImg"></img>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
