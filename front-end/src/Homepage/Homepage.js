import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../AuthContext";

function Homepage() {
  const { currUser } = useContext(AuthContext);
  return (
    <div style={{ textAlign: 'center' }}>
      {currUser ?
        <div>
          <h1>Jobly</h1>
          <h2>Welcome Back, {currUser.firstName}!</h2>
          <p>Find the right job for you!</p>
        </div>
        :
        <div>
          <h1>Jobly</h1>
          <p>Find the right job for you!</p>
        </div>
      }
    </div>
  );
}

export default Homepage;
