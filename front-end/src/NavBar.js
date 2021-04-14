import { NavLink } from "react-router-dom";
function NavBar({ currUser, logout }) {

  return (

    <div>
      {currUser &&
        <div>
          <NavLink to="/homepage">Homepage</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink onClick={() => logout()} to="/homepage">Logout {currUser.username}</NavLink>
        </div>
      }
      {!currUser &&
        <div>
          <NavLink to="/homepage">Homepage</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          
        </div>
      }
    </div>
  );
}

export default NavBar;
