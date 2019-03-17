import React from 'react';
import { Route, Switch, Router, Redirect } from 'react-router';
import { history } from '../store';

import Form from '../pages/form';
import Error404 from '../pages/404';

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Form} />
      <Route exact path="/404" component={Error404} />
      <Redirect  from="*" to="/404"/>
    </Switch>
  </Router>
);

export default AppRouter;