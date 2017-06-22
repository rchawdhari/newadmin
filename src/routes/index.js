import React from 'react';
import { Router, NavLink, Route, Switch} from "react-router-dom";
import signIn from '../components/login';
import App from '../components/app';
import history from '../tools/history';

const Routes = () => {
  return(
    <Router history={history}>
      <div>

        <Switch>
          <Route exact path="/" component={ App }/>
          <Route path="/login" component={ signIn} />
          <Route render={() => ( <h1>404 </h1>)}/>
        </Switch>
      </div>
    </Router>
  );
};
export default Routes;
