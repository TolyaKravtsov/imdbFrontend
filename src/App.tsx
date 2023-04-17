import React, { useCallback, useState } from "react";

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { LoginDialog } from "./components/LoginDialog";
import { MenuBar } from "./components/MenuBar";

export const App = () => {
  const [login, setOpenLogin] = useState<boolean>(false);
  const onOpenLogin = useCallback(() => setOpenLogin(true), []);
  const onCloseLogin = useCallback(() => setOpenLogin(false), []);

  return (
    <Box height="100%" width="100%">
      <MenuBar onOpenLogin={onOpenLogin} />
      <LoginDialog open={login} onCloseLogin={onCloseLogin} />
      <Outlet />
    </Box>
  );
};
