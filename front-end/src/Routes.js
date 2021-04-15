import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from "./Jobs";
import Companies from "./Companies";
import Profile from "./Profile";
import Homepage from "./Homepage";
import LoginForm from "./Auth/LoginForm";
import SignupForm from "./Auth/SignupForm";
import CompanyDetail from "./CompanyDetail";
import AuthContext from "./AuthContext";

function Routes() {
  const { currUser } = useContext(AuthContext);

  return (
    <div>
      {currUser ?
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/companies">
            <Companies />
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Redirect to="/" />
        </Switch>
        :
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/signup">
            <SignupForm />
          </Route>
          <Redirect to="/" />
        </Switch>
      }
    </div>

  );
}

export default Routes;
