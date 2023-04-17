import { http } from ".";

const token = localStorage.getItem("token");

export const getFavoritesMovie = () => http.get("http://localhost:8089/favoriteMovies", { params: { token } });

export const updateFavoriteMovies = (favorites: string) =>
  http.put("http://localhost:8089/updateFavorite", { favorites, token });
