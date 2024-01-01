import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import AuthContext from '../AuthContext';
import { Lock } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Alert, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material'

function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const defaultTheme = createTheme();

  function handleChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let response = await login(formData);
    if (response.token) {
      setFormData({ username: "", password: "" });
      navigate("/");
    } else {
      setError(response[0]);
    }
  }

  async function demoLogin() {
    await login({ username: "testuser", password: "password" })
    navigate("/");
  }

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            {/* <LockOutlinedIcon /> */}
            <Lock/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleChange}
              value={formData.username}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              onChange={handleChange}
              value={formData.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
            {error && <Alert severity="error">{error}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link onClick={() => { demoLogin() }} variant="body2" sx={{ cursor: 'pointer' }} data-testid="demo-account-link">
                  Demo Account
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm;
