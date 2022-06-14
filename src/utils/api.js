import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-api-sl.herokuapp.com/api",
});

export const getReviews = (category) => {
  return ncGamesApi
    .get("/reviews", { params: { category } })
    .then(({ data }) => {
      return data.reviews;
    });
};

export const getCategories = (category) => {
  return ncGamesApi
    .get("/categories", { params: { category } })
    .then(({ data }) => {
      return data.categories;
    });
};
