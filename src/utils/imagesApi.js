import axios from "axios";
const BASIC_URL = "https://pixabay.com/api/";
const API_KEY = "3616495-8ef67a89dfdb2c2d531583fa2";

export const imagesApi = (searchQuery, pageNumber) => {
  return axios
    .get(
      `${BASIC_URL}?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=15`
    )
    .then(({ data }) => data);
};
