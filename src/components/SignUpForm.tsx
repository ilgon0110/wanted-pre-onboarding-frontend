import React from "react";
import { ISignUpForm } from "@controllers/SignUp";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LockOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

interface ISignUpFormProps {
  formValues: ISignUpForm;
  formError: ISignUpForm;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValidButton: boolean;
}

const SignUpForm = ({
  formValues,
  formError,
  handleChange,
  isValidButton,
}: ISignUpFormProps) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></Box>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        autoComplete="email"
        autoFocus
        inputProps={{ "data-testid": "email-input" }}
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />
      <span>{formError.email}</span>
      <TextField
        margin="normal"
        required
        fullWidth
        type="password"
        id="password"
        autoComplete="current-password"
        inputProps={{ "data-testid": "password-input" }}
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <span>{formError.password}</span>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        data-testid="signup-button"
        disabled={isValidButton}
      >
        회원가입
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href={"/signin"} variant="body2">
            계정이 있으신가요?
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(SignUpForm);
