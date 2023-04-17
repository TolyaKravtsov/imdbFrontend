import React, { SyntheticEvent, useCallback, useState } from "react";

import { AppBar, Box, Button, Tab, Tabs, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Pages } from "../index";

interface MenuBarProps {
  onOpenLogin: () => void;
}
export const MenuBar = ({ onOpenLogin }: MenuBarProps) => {
  const token = localStorage.getItem("token");
  const [page, setPage] = useState<Pages>(Pages.films);
  const navigate = useNavigate();

  const onChangePage = useCallback(
    (e: SyntheticEvent<Element, Event>, value: Pages) => {
      setPage(value);
      navigate(value);
    },
    [navigate],
  );

  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Tabs value={page} onChange={onChangePage}>
            <Tab label="List of Films" value={Pages.films} />
            <Tab disabled={!token} label="Favorite Films" value={Pages.favorite} />
          </Tabs>
          <Button color="inherit" onClick={onOpenLogin}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
