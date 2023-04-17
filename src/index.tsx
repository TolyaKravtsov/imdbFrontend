import React from "react";

import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { Favorites } from "./components/Favorites";
import { ListOfFilms } from "./components/ListOfFilms";
import { theme } from "./theme";

export enum Pages {
  films = "films",
  favorite = "favorite",
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      ),
      children: [
        {
          path: Pages.films,
          element: <ListOfFilms />,
        },
        {
          path: Pages.favorite,
          element: <Favorites />,
        },
      ],
    },
  ],
  { basename: "/" },
);

root.render(<RouterProvider router={router} />);
