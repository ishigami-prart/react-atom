import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/atoms/pages/Top";

import { Users } from "../components/atoms/pages/Users";
import { DefaultLayout } from "../components/templetes/DefaultLayout";
import { HeaderOnly } from "../components/templetes/HeaderOnly";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
