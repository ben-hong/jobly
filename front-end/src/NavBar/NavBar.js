import { useContext } from "react";
import AuthContext from "../AuthContext";
import { AppBar, Toolbar, Link } from "@mui/material";
import { Box } from "@mui/system";
import { NavBarLink } from "./NavStyle"
function NavBar() {
  const { currUser, logout } = useContext(AuthContext);

  return (
    <AppBar color="default" position="static" enableColorOnDark>
      {currUser ?
        <Toolbar>
          <Box sx={{ display: 'flex', height: 20 }}>
            <NavBarLink exact to="/">
              <img src="/jobly.png" alt="Jobly" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </NavBarLink>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, gap: '2rem' }}>
            <NavBarLink exact to="/jobs" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Jobs</NavBarLink>
            <NavBarLink exact to="/companies" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Companies</NavBarLink>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap:'.5rem'}}>
            <NavBarLink exact to="/profile">Profile</NavBarLink>
            <NavBarLink onClick={logout} exact to="/">Log out</NavBarLink>
          </Box>
        </Toolbar>
        :
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', height: 20 }}>
            <NavBarLink exact to="/">
              <img src="/jobly.png" alt="Jobly" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </NavBarLink>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, gap: '2rem' }}>
            <NavBarLink exact to="/jobs" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Jobs</NavBarLink>
            <NavBarLink exact to="/companies" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Companies</NavBarLink>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: 'auto' }}>
            <div>
              <NavBarLink exact to="/login">Login</NavBarLink>
            </div>
            <div style={{ marginLeft: '10px' }}>
              <NavBarLink exact to="/signup">Signup</NavBarLink>
            </div>
          </Box>

        </Toolbar>
      }
    </AppBar>
  );
}

export default NavBar;
