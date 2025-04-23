import apiClient from "../apiClient";

enum AuthorApi {
  Authors = "/authors",
}

const getAuthors = () => apiClient.get({
  url: AuthorApi.Authors,
});

const createAuthor = (data:string) => apiClient.post({
  url: AuthorApi.Authors,
  data: {"full_name": data},
});

export {
  getAuthors,
  createAuthor,
}