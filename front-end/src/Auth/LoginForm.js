import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../AuthContext";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialState = {
  username: "",
  password: "",
};

function LoginForm() {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { login } = useContext(AuthContext);
  const classes = useStyles();

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
      setFormData(initialState);
      history.push("/companies")
    } else {
      setError(response[0]);
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PermIdentityIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
      </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={formData.username}
            variant="outlined"
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
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {error && <p>{error}</p>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
        </Button>
        </form>
      </div>
    </Container>
    //   <form onSubmit={handleSubmit}>
    //     <div className="formGroup">
    //       <label htmlFor="username">Username</label>
    //       <input
    //         id="username"
    //         onChange={handleChange}
    //         name="username"
    //         value={formData.username}
    //         placeholder="Enter a username"
    //       />
    //     </div>
    //     <div className="formGroup">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         onChange={handleChange}
    //         name="password"
    //         value={formData.password}
    //         placeholder="Enter a password"
    //       />
    //     </div>
    //     {error && <p>{error}</p>}
    //     <button>Log In</button>
    // </form>
  );
}

export default LoginForm;
