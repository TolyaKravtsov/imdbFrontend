import { http } from ".";

export const getFavoritesMovie = () => {
  const token = localStorage.getItem("token");
  return http.get("http://localhost:8089/favoriteMovies", { params: { token } });
};

export const updateFavoriteMovies = (favorites: string) => {
  const token = localStorage.getItem("token");
  return http.put("http://localhost:8089/updateFavorite", { favorites, token });
};
