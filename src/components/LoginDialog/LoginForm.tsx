import React, { useCallback } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { http } from "../../api";

interface LoginFormProps {
  onClose: () => void;
}
export const LoginForm = ({ onClose }: LoginFormProps) => {
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      http
        .post("http://localhost:8089/auth", {
          login: data.get("login"),
          password: data.get("password"),
        })
        .catch(err => err)
        .then(data => {
          localStorage.setItem("token", data.data.token);
        });
      onClose();
    },
    [onClose],
  );

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box noValidate component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            autoFocus
            fullWidth
            required
            autoComplete="login"
            id="login"
            label="login Address"
            margin="normal"
            name="login"
          />
          <TextField
            fullWidth
            required
            autoComplete="current-password"
            id="password"
            label="Password"
            margin="normal"
            name="password"
            type="password"
          />
          <Button fullWidth sx={{ mt: 3, mb: 2 }} type="submit" variant="contained">
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
