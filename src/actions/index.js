import { SET_ARTICLE_DETAILS, API, FETCH_ARTICLE_DETAILS } from "./types";

export function fetchArticleDetails() {
  return apiAction({
    url: "https://movie-kdb.herokuapp.com/api/movie",
    onSuccess: setArticleDetails,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_ARTICLE_DETAILS
  });
}

function setArticleDetails(data) {
  console.log(data.movie[0]);
  return {
    type: SET_ARTICLE_DETAILS,
    payload: data.movie[0]
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
