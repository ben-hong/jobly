import { BrowserRouter } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useState, useEffect } from "react";
import AuthContext from "./AuthContext"
import JoblyApi from "./JoblyApi";
import Routes from "./Routes";
import NavBar from "./NavBar";

function App() {
  const [token, setToken] = useState(null);
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    if (token) {
      JoblyApi.token = token;
      const decodedToken = decodeToken(token);
      setCurrUser(decodedToken);
    } else {
      setCurrUser(null);
    }
  }, [token]);

  async function signup(fData) {
    try {
    const response = await JoblyApi.register(fData);
    setToken(response.token);
    return response;
    } catch(err) {
      return err;
    }
  }

  async function login(fData) {
    try {
    const response = await JoblyApi.login(fData);
    setToken(response.token);
    return response;
    } catch(err) {
      return err;
    }
  }

  function logout() {
    setToken(null);
  }

  return (
    <div>
      <AuthContext.Provider value={{login, signup, currUser}}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <Routes />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

