//import { Link } from "react-router-dom";
import { ISignUpForm } from "../controllers/SignUp";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LockOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface ISignInFormProps {
  formValues: ISignUpForm;
  formError: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInForm = ({
  formValues,
  formError,
  handleChange,
}: ISignInFormProps) => {
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
        Sign in
      </Typography>

      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        inputProps={{ "data-testid": "email-input" }}
        value={formValues.email}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        inputProps={{ "data-testid": "password-input" }}
        value={formValues.password}
        onChange={handleChange}
      />
      <div>{formError}</div>
      <Button
        data-testid="signin-button"
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        로그인
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href={"/signup"} variant="body2">
            계정이 없으신가요?
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignInForm;
