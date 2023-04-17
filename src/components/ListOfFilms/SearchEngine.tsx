import React, { useEffect, useState } from "react";

import { Box, FormControlLabel, Grid, Pagination, Switch, TextField } from "@mui/material";

import { http } from "../../api";
import { FilmsInfo } from "../../common/Types";

interface SearchEngineProps {
  setSearchResult: React.Dispatch<React.SetStateAction<FilmsInfo>>;
  searchResult: FilmsInfo;
}

export const SearchEngine = ({ searchResult, setSearchResult }: SearchEngineProps) => {
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [plot, setPlot] = useState<"Full" | "Short">("Full");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const data = {
      s: title,
      y: year,
      plot: plot,
      page: page,
    };
    http.get("https://omdbapi.com/?apikey=a24c1261", { params: data }).then(data => {
      setSearchResult(data.data);
    });
  }, [page, plot, setSearchResult, title, year]);

  return (
    <Box m={2}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs>
          <TextField fullWidth label="Title" onChange={({ target }) => setTitle(target.value)} />
        </Grid>
        <Grid item xs>
          <TextField fullWidth label="Year" onChange={({ target }) => setYear(target.value)} />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Switch defaultChecked title="plot" onChange={() => setPlot(plot === "Full" ? "Short" : "Full")} />
            }
            label="plot"
          />
        </Grid>
      </Grid>
      {Number(searchResult.totalResults) > 9 && (
        <Box display="flex" justifyContent="center" my={2}>
          <Pagination
            count={Math.floor(Number(searchResult.totalResults) / 9)}
            page={page}
            onChange={(event, page) => setPage(page)}
          />
        </Box>
      )}
    </Box>
  );
};
