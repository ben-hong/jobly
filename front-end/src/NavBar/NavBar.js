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
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', height: 20 }}>
            <NavBarLink exact to="/">
              <img src="/jobly.png" alt="Jobly" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </NavBarLink>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, gap:'5rem' }}>
            <NavBarLink exact to="/jobs" sx={{fontSize:'1.2rem'}}>Jobs</NavBarLink>
            <NavBarLink exact to="/companies" sx={{fontSize:'1.2rem'}}>Companies</NavBarLink>
            <NavBarLink exact to="/profile" sx={{fontSize:'1.2rem'}}>Profile</NavBarLink>
          </Box>
            <NavBarLink onClick={logout} exact to="/homepage">Log out</NavBarLink>
        </Toolbar>
        :
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', height: 20 }}>
            <NavBarLink exact to="/">
              <img src="/jobly.png" alt="Jobly" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </NavBarLink>
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
