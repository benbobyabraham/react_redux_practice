import axios from "axios";

var baseURL;
if (
  process.env.REACT_APP_ENVIRONMENT &&
  process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
) {
  baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  baseURL = "http://127.0.0.1:8000";
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  getImages = async (page, search, tagId) => {
    let url = "/images/?page=" + page;
    if (tagId) {
      url += "&tags=" + tagId;
    }
    if (search) {
      url += "&search=" + search;
    }
    const images = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return images;
  };

  getImage = async (id) => {
    const response = await api
      .get("/images/" + id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };

  getTags = async () => {
    const tags = await api
      .get("/tags/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return tags;
  };
}
