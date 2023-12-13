import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Jobs from "./Jobs";
import Companies from "./Companies";
import Profile from "./Profile";
import Homepage from "./Homepage/Homepage";
import LoginForm from "./Auth/LoginForm";
import SignupForm from "./Auth/SignupForm";
import CompanyDetail from "./CompanyDetail";
import AuthContext from "./AuthContext";

function NavRoutes() {
  const { currUser } = useContext(AuthContext);
  return (
    <>
      {
      currUser 
      ? (
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/companies" element={<Companies/>} />
          <Route exact path="/companies/:handle" element={<CompanyDetail/>} />
          <Route exact path="/jobs" element={<Jobs/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route element={<Navigate to="/"/>} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/login" element={<LoginForm/>} />
          <Route exact path="/signup" element={<SignupForm/>} />
          <Route element={<Navigate to="/"/>} />
        </Routes>
      )
    }
    </>
  );
}

export default NavRoutes;
