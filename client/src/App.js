import React, { Fragment, } from 'react';
import NoMatch from './components/NoMatch';
import { Switch, Route, } from 'react-router-dom';
import PaymentsSuccess from './components/PaymentsSuccess';
import Layout from './components/Layout';

const App = () => (
  <Fragment>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path='/payment_success' component={PaymentsSuccess} />
          <Route component={NoMatch} />
        </Switch>
  </Fragment>
)

export default App;
