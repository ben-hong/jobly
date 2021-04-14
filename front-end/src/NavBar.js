import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

function NavBar({ logout }) {
  const { currUser } = useContext(AuthContext);

  return (

    <div>
      {currUser ?
        <div>
          <NavLink exact to="/homepage">Homepage</NavLink>
          <NavLink exact to="/jobs">Jobs</NavLink>
          <NavLink exact to="/companies">Companies</NavLink>
          <NavLink exact to="/profile">Profile</NavLink>
          <NavLink onClick={logout} exact to="/homepage">Logout {currUser.username}</NavLink>
        </div>
        :
        <div>
          <NavLink exact to="/homepage">Homepage</NavLink>
          <NavLink exact to="/login">Login</NavLink>
          <NavLink exact to="/signup">Signup</NavLink>
        </div>
      }
    </div>
  );
}

export default NavBar;
