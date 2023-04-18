import React, { useCallback, useState } from "react";

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { LoginDialog } from "./components/LoginDialog";
import { MenuBar } from "./components/MenuBar";

export const App = () => {
  const [openlogin, setOpenOpenlogin] = useState<boolean>(false);
  const onOpenLogin = useCallback(() => setOpenOpenlogin(true), []);
  const onCloseLogin = useCallback(() => setOpenOpenlogin(false), []);

  return (
    <Box height="100%" width="100%">
      <MenuBar onOpenLogin={onOpenLogin} />
      <LoginDialog open={openlogin} onCloseLogin={onCloseLogin} />
      <Outlet />
    </Box>
  );
};
