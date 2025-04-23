import apiClient from "../apiClient";

type GenreRes = Genre[];

enum GenreApi {
  Genres = "/genre",
}

const getGenres = () => apiClient.get<GenreRes>({
  url: GenreApi.Genres,
});

export {
  getGenres,
}