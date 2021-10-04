import React from "react";
import { Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PersonListPage from "./pages/PersonListPage";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/name-list">
        <PersonListPage />
      </Route>
    </React.Fragment>
  );
};

export default App;
