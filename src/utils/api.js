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

export const getReviewById = (review_id) => {
  return ncGamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const incVotes = (review_id, inc_votes) => {
  return ncGamesApi
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then(({ data }) => {
      return data;
    });
};

export const getReviewComments = (review_id) => {
  return ncGamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};
