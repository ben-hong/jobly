import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../AuthContext";

function Homepage() {
  const { currUser } = useContext(AuthContext);
  // const classes = useStyles();
  return (
    <div>
      {currUser ?
        <div>
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <h2>Welcome Back, {currUser.firstName}!</h2>
        </div>
        :
        <div>
          at homepage
        </div>
      }

    </div>
  );
}

export default Homepage;
