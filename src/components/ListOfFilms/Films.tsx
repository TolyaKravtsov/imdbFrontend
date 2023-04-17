import React, { useCallback } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";

import { getFavoritesMovie, updateFavoriteMovies } from "../../api/requests";
import { FilmsInfo } from "../../common/Types";

interface FilmsProps {
  searchResult: FilmsInfo;
}

export const Films = ({ searchResult }: FilmsProps) => {
  const addToFavoriteList = useCallback(async (imdbId: string) => {
    const favorites = await getFavoritesMovie().then(data => data.data);
    const newList = favorites.favourite_movies + "," + imdbId;
    return await updateFavoriteMovies(newList);
  }, []);

  return (
    <Box height="100%" m={4}>
      <Grid container spacing={2}>
        {searchResult?.Search?.map(({ Poster, Title, Year, imdbID }) => (
          <Grid item key={Title} md={2.4} xs={12}>
            <Card
              elevation={6}
              sx={{ height: 500, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <CardMedia image={Poster} sx={{ height: "100%" }} title={Title} />
              <CardContent>
                <Typography gutterBottom component="div" variant="subtitle1">
                  {Title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {Year}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="flex-end" width="100%">
                  <IconButton>
                    <FavoriteBorderIcon onClick={() => addToFavoriteList(imdbID)} />
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
