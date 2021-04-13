import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/companies/detail">Company Detail</NavLink>
      <NavLink to="/homepage">Homepage</NavLink>
    </div>
  );
}

export default NavBar;
