import React from "react";
import { Route, Switch } from "react-router";
import { CharaEdit, CharaList, Home } from "./templates";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Home} />
      <Auth>
        <Route exact path="/list" component={CharaList} />
        <Route path="/edit(/:id)?" component={CharaEdit} />
      </Auth>
    </Switch>
  );
};

export default Router;
