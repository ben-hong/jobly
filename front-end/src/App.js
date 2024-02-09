import { BrowserRouter } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";
import NavRoutes from "./NavRoutes";
import NavBar from "./NavBar/NavBar";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currUser, setCurrUser] = useState(null);

  function setLocalStorage(token) {
    localStorage.setItem("token", token);
    return localStorage.getItem("token");
  }

  useEffect(() => {
    if (token) {
      JoblyApi.token = token;
      const decodedToken = decodeToken(token);
      async function settingCurrUser() {
        try {
          let userData = await JoblyApi.getUser(decodedToken.username);
          setCurrUser(userData);
        } catch (err) {
          return err;
        }
      }
      settingCurrUser();
      setLocalStorage(token);
    } else {
      setCurrUser(null);
      localStorage.removeItem("token");
    }
  }, [token]);

  async function signup(fData) {
    try {
      const response = await JoblyApi.register(fData);
      setToken(response.token);
      return response;
    } catch (err) {
      return err;
    }
  }

  async function login(fData) {
    try {
      const response = await JoblyApi.login(fData);
      setToken(response.token);
      return response;
    } catch (err) {
      return err;
    }
  }



  function logout() {
    setToken(null);
  }

  return (
    <div>
      <AuthContext.Provider value={{ login, signup, currUser, setCurrUser, logout }}>
        <BrowserRouter>
          <NavBar/>
          <NavRoutes/>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
