import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from './routes/Users.js';
import Monitor from './routes/MonitorRoute.js';

function RouterConfig({ history }) {
  	return (
    	<Router history={history}>
      		<Route path="/" component={IndexPage} />
      		<Route path="/users" component={Users} />
      		<Route path="/monitor" component={Monitor} />
    	</Router>
  );
}

export default RouterConfig;
