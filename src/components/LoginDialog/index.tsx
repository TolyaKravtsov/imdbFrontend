import React from "react";

import { Dialog, DialogContent } from "@mui/material";

import { LoginForm } from "./LoginForm";

interface LoginDialogProps {
  open: boolean;
  onCloseLogin: () => void;
}

export const LoginDialog = ({ onCloseLogin, open }: LoginDialogProps) => {
  return (
    <Dialog open={open} onClose={onCloseLogin}>
      <DialogContent>
        <LoginForm onClose={onCloseLogin} />
      </DialogContent>
    </Dialog>
  );
};
