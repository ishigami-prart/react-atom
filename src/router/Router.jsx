import { BrowserRouter, Route, Switch } from "react-router-dom";

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
