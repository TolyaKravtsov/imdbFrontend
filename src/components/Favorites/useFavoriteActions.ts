import { useCallback, useState } from "react";

import { http } from "../../api";
import { getFavoritesMovie, updateFavoriteMovies } from "../../api/requests";
import { FilmsDescription } from "../../common/Types";

export const useFavoriteActions = () => {
  const [myFavoriteMovies, setMyFavoriteMovies] = useState<{ favourite_movies: string }>({ favourite_movies: "" });
  const [filmInfo, setFilmInfo] = useState<Array<FilmsDescription>>([]);

  const getAllFavoriteFilms = useCallback(async () => {
    await getFavoritesMovie().then(data => setMyFavoriteMovies(data.data));

    await Promise.all(
      myFavoriteMovies.favourite_movies?.split(",").map(async imdbId => {
        return http
          .get("https://omdbapi.com/?apikey=a24c1261", { params: { i: imdbId } })
          .catch(err => err)
          .then(data => data.data);
      }),
    ).then((response: any) => setFilmInfo(response));
  }, [myFavoriteMovies.favourite_movies]);

  const onRemoveFavoriteFilm = useCallback(
    (imdbId: string) => {
      const removedResult = myFavoriteMovies.favourite_movies
        .split(",")
        .filter(item => item !== imdbId)
        .join(",");
      updateFavoriteMovies(removedResult).then(() => setMyFavoriteMovies({ favourite_movies: removedResult }));
    },
    [myFavoriteMovies.favourite_movies],
  );

  return { getAllFavoriteFilms, onRemoveFavoriteFilm, filmInfo };
};
