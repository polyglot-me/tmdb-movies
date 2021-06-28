import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { HomeScreen } from "./screens/private/HomeScreen";
import { LoginScreen } from "./screens/public/Login";
import { RegisterScreen } from "./screens/public/Register";

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

function App({ authState }: any) {
  const [currrentUser, setCurrentUser] = useState(authState?.data);
  useEffect(() => {
    setCurrentUser(authState?.data);
  }, [authState]);
  return (
    <div className="app">
      <Router>
        <Switch>
          {currrentUser ? (
            <>
              <Route path="/">
                <Redirect to="/movies"></Redirect>
              </Route>
              <Route path="/movies">
                <HomeScreen />
              </Route>
            </>
          ) : (
            <>
              <Route path="/" exact>
                <Redirect to="/login"></Redirect>
              </Route>
              <Route path="/login" exact>
                <LoginScreen />
              </Route>
              <Route strict={true} path="/register" exact>
                <RegisterScreen />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  authState: state.auth,
});
export default connect(mapStateToProps)(App);
