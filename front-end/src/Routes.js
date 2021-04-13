import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from "./Jobs";
import Companies from "./Companies";
import Profile from "./Profile";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";
import CompanyDetail from "./CompanyDetail";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      {/* are we naming our props correctly? */}
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <Jobs />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
