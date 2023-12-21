import { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Avatar, Alert, Box, Button, CssBaseline, Divider, TextField, Typography, Container } from "@mui/material";

function Profile() {
  const { currUser, setCurrUser } = useContext(AuthContext);
  const { username, firstName, lastName, email } = currUser;
  const initialState = { firstName, lastName };
  const [formData, setFormData] = useState(initialState);
  const [nameErrors, setNameErrors] = useState(null);
  const [nameChanged, setNameChanged] = useState(false);
  const [passwordData, setPasswordData] = useState({ password: "", newPassword: "" });
  const [passwordErrors, setPasswordErrors] = useState(null);
  const [passwordChanged, setPasswordChanged] = useState(false);

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
      setNameChanged(true);
      setNameErrors(null);
    } catch (err) {
      setNameErrors(err);
      setNameChanged(false);
    }
  }

  function handlePassChange(evt) {
    const { name, value } = evt.target;
    setPasswordData((pData) => ({ ...pData, [name]: value }));
  }

  async function passChangeSubmit(evt) {
    evt.preventDefault();
    setPasswordData({ password: "", newPassword: "" });
    setPasswordErrors(null);
    try {
      await JoblyApi.changeUserProfile(username, passwordData);
      setPasswordChanged(true);
    } catch (err) {
      setPasswordErrors(err);
      setPasswordChanged(false);
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar>
          <PermIdentityIcon />
        </Avatar>
        <Box sx={{ margin: 1 }}>
          <Typography variant="h5">
            Username - {username}
          </Typography>
          <Typography variant="h5">
            Email - {email}
          </Typography>
        </Box>
        <Divider style={{ margin: 3, width: '100%' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 3 }}>
          <Typography variant="h6"><strong>Change Your Name</strong></Typography>
          <form noValidate id="nameForm" onSubmit={handleSubmit}>
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
            {nameErrors && nameErrors.map(e => <Alert key={e} severity="error">{e}</Alert>)}
            {nameChanged && <Alert severity="success">Successfully Changed Name!</Alert>}
          </form>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            form="nameForm"
            sx={{ width: '33%', marginTop: 1 }}
          >
            Submit
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 3 }}>
          <Typography variant="h6"><strong>Change Your Password</strong></Typography>
          <form noValidate id="passForm"
            onSubmit={passChangeSubmit}>
            <TextField
              onChange={handlePassChange}
              value={passwordData.password}
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
              onChange={handlePassChange}
              value={passwordData.newPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="new password"
              type="password"
              id="newPassword"
              autoComplete="newPassword"
            />
            {passwordErrors && passwordErrors.map(e => <Alert severity="error">{e}</Alert>)}
            {passwordChanged && <Alert severity="success">Successfully Changed Password!</Alert>}
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            form="passForm"
            sx={{ width: '50%', marginTop: 1 }}
          >
            Change Password
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Profile;
