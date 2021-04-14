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
    const decodedToken = decodeToken(token.token);
    setCurrUser(decodedToken);
    console.log("current user", currUser);
  }, [token]);

  async function signup(fData) {
    const response = await JoblyApi.register(fData);
    console.log(response);
    setToken(response);
  }

  async function login(fData) {
    const response = await JoblyApi.register(fData);
    console.log(response);
    setToken(response);
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar currUser={currUser} />
        <Routes signup={signup} login={login} currUser={currUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;

// const [testApi, setTestApi] = useState(null);

// useEffect(() => {
//   async function testApi() {
//     let api = await JoblyApi.getJobs();
//     setTestApi(api);
//   }
//   testApi();
// }, []);

// return <div className="App">{console.log({ testApi })}</div>;
