import React from "react";
import { Switch, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage></AllMeetupsPage>
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage></NewMeetupPage>
          </Route>
          <Route path="/favorites">
            <FavoritesPage></FavoritesPage>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
