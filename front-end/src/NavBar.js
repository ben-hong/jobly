import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";
import { AppBar, Toolbar, IconButton, Container, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Home } from "@material-ui/icons"

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  iconContainer: {
    "&:hover $icon": {
      color: `gold`
    }
  },
  icon: {
    color: `white`
  },
  linkText: {
    "& a": {
      margin: `20px`,
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    },
    "& a.active, & a:hover": {
      color: `gold`
    }
  }
});

function NavBar() {
  const { currUser, logout } = useContext(AuthContext);
  const classes = useStyles();

  return (

    <AppBar position="static">
      {currUser ?
        <Toolbar>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <IconButton className={classes.iconContainer} edge="start" color="default" aria-label="home">
              <NavLink exact to="/homepage">
                <Home className={classes.icon} fontSize="large" />
              </NavLink>
            </IconButton>
            <Box mt={3} className={classes.linkText}>
              <NavLink exact to="/jobs">Jobs</NavLink>
              <NavLink exact to="/companies">Companies</NavLink>
              <NavLink exact to="/profile">Profile</NavLink>
              <NavLink onClick={logout} exact to="/homepage">Logout {currUser.username}</NavLink>
            </Box>
          </Container>
        </Toolbar>
        :
        <Toolbar>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <IconButton className={classes.iconContainer} edge="start" color="default" aria-label="home">
              <NavLink exact to="/homepage">
                <Home className={classes.icon} fontSize="large" />
              </NavLink>
            </IconButton>
            <Box mt={3} className={classes.linkText}>
              <NavLink exact to="/login">Login</NavLink>
              <NavLink exact to="/signup">Signup</NavLink>
            </Box>
          </Container>
        </Toolbar>
      }
    </AppBar>
  );
}

export default NavBar;
