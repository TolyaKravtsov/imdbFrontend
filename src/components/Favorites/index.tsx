import React, { useCallback, useEffect, useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";

import { http } from "../../api";
import { getFavoritesMovie, updateFavoriteMovies } from "../../api/requests";
import { FilmsDescription } from "../../common/Types";

export const Favorites = () => {
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

  useEffect(() => {
    getAllFavoriteFilms();
  }, [getAllFavoriteFilms]);

  return (
    <Box height="100%" m={4}>
      <Grid container spacing={2}>
        {filmInfo?.map(({ Actors, Awards, Language, Plot, Poster, Title, Year, imdbID }) => (
          <Grid item key={Title} lg={2.4} md={4} xs={12}>
            <Card
              elevation={6}
              sx={{ height: 900, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <CardMedia image={Poster} sx={{ height: "100%" }} title={Title} />
              <CardContent>
                <Typography gutterBottom component="div" variant="subtitle1">
                  {Title}
                </Typography>
                <Typography gutterBottom color="text.secondary" variant="body2">
                  {Actors}
                </Typography>
                <Typography gutterBottom color="text.secondary" variant="body2">
                  {Year}
                </Typography>
                <Typography gutterBottom color="text.secondary" variant="body2">
                  {Plot}
                </Typography>
                <Typography gutterBottom color="text.secondary" variant="body2">
                  {Language}
                </Typography>
                <Typography gutterBottom color="text.secondary" variant="body2">
                  {Awards}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="flex-end" width="100%">
                  <IconButton onClick={() => onRemoveFavoriteFilm(imdbID)}>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
