import { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Avatar, Button, CssBaseline, TextField, Typography, Container } from "@mui/material";

function Profile() {
  const { currUser, setCurrUser } = useContext(AuthContext);
  const { username, firstName, lastName, email } = currUser;
  const initialState = { firstName, lastName };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(null);

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
    try {
      await JoblyApi.changeUserProfile(username, formData);
      setCurrUser((user) => ({ ...user, ...formData }));
      setErrors([]);
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <PermIdentityIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Username: {username}
          Email: {email}
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={formData.firstName}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
          />
          <TextField
            onChange={handleChange}
            value={formData.lastName}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            type="lastName"
            id="lastName"
            autoComplete="lastName"
          />
          <TextField
            onChange={handleChange}
            value={formData.password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="password"
          />
                    <TextField
            onChange={handleChange}
            value={formData.password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="password"
          />
          {errors && (
            <ul>
              {errors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Profile;
