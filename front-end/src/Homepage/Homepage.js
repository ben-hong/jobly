import { useContext } from "react";
import AuthContext from "../AuthContext";
import { Box } from "@mui/material";


function Homepage() {
  const { currUser } = useContext(AuthContext);
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: `url('cityscape.png')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
      {currUser ?
        <Box>
          <h1 style={{margin:0}}>Jobly</h1>
          <h2>Welcome Back, {currUser.firstName}!</h2>
          <p>Find the right job for you!</p>
        </Box>
        :
        <Box>
          <h1 style={{margin:0}}>Jobly</h1>
          <p>Find the right job for you!</p>
        </Box>
      }
    </Box>
  );
}

export default Homepage;
