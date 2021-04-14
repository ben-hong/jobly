import { BrowserRouter } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import Routes from "./Routes";
import NavBar from "./NavBar";

function App() {
  const [token, setToken] = useState(null);
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    if (token) {
    const decodedToken = decodeToken(token.token);
    setCurrUser(decodedToken);

    }
  }, [token]);

  async function signup(fData) {
    const response = await JoblyApi.register(fData);
    setToken(response);
  }

  async function login(fData) {
    const response = await JoblyApi.login(fData);
    setToken(response);
    console.log('resp', response)
  }

  function logout() {
    setToken(null);
    setCurrUser(null);
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar currUser={currUser} logout={logout}/>
        <Routes signup={signup} login={login} currUser={currUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;

