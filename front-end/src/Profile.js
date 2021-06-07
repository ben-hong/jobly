import { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";

import Avatar from '@material-ui/core/Avatar';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Profile() {
  const { currUser, setCurrUser } = useContext(AuthContext);
  const { username, firstName, lastName, email } = currUser;
  const initialState = { firstName, lastName, email };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(null);

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
    try {
      let response = await JoblyApi.changeUserProfile(username, formData);
      setCurrUser((user) => ({ ...user, ...formData }));
      setErrors([]);
    } catch (err) {
      setErrors(err);
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
          Username: {username}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
            value={formData.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
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
            className={classes.submit}
          >
            Submit
        </Button>
        </form>
      </div>
    </Container>
    // <form onSubmit={handleSubmit}>
    //   <div className="formGroup">
    //     <div>Username: {username}</div>
    //   </div>
    //   <div className="formGroup">
    //     <label htmlFor="firstName">First Name</label>
    //     <input
    //       id="firstName"
    //       onChange={handleChange}
    //       name="firstName"
    //       value={formData.firstName}
    //       placeholder="Enter your first name"
    //     />
    //   </div>
    //   <div className="formGroup">
    //     <label htmlFor="lastName">Last Name</label>
    //     <input
    //       id="lastName"
    //       onChange={handleChange}
    //       name="lastName"
    //       value={formData.lastName}
    //       placeholder="Enter your last name"
    //     />
    //   </div>
    //   <div className="formGroup">
    //     <label htmlFor="email">Email</label>
    //     <input
    //       type="email"
    //       id="email"
    //       onChange={handleChange}
    //       name="email"
    //       value={formData.email}
    //       placeholder="Select an email"
    //     />
    //   </div>
    //   {errors && (
    //     <ul>
    //       {errors.map((error) => (
    //         <li>{error}</li>
    //       ))}
    //     </ul>
    //   )}

    //   <button>SUBMIT</button>
    // </form>
  );
}

export default Profile;
