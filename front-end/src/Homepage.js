import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

function Homepage() {
  const { currUser } = useContext(AuthContext);
  return (

    <div>
      {currUser &&
        <div>
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <h2>Welcome Back, {currUser.username}!</h2>
        </div>
      }
      {!currUser &&
        <div>
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <div>
            <Link exact to="/login">Log in</Link>
            <Link exact to="/signup">Sign up</Link>
          </div>
        </div>
      }
    </div>
  );
}

export default Homepage;
