import { Switch, Route } from "react-router";
import Confraternization from "../pages/Confraternization";
import Graduation from "../pages/Graduation";
import Home from "../pages/Home";
import Wedding from "../pages/Wedding";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/wedding">
        <Wedding />
      </Route>

      <Route path="/graduation">
        <Graduation />
      </Route>

      <Route path="/confraternization">
        <Confraternization />
      </Route>
    </Switch>
  );
}

export default Routes;
