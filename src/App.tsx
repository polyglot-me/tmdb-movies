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
          <Route path="/">
            <HomeScreen />
          </Route>
          {currrentUser ? (
            <>
              <Route path="/">
                <HomeScreen />
              </Route>
            </>
          ) : (
            <>
              <Route strict={true} path="/login">
                <LoginScreen />
              </Route>
              <Route strict={true} path="/register">
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
