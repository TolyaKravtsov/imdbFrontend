import React, { useEffect } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";

import { useFavoriteActions } from "./useFavoriteActions";

export const Favorites = () => {
  const { filmInfo, getAllFavoriteFilms, onRemoveFavoriteFilm } = useFavoriteActions();

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
