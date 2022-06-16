import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/atoms/pages/Top";
import { Users } from "../components/atoms/pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
