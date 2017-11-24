import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from './routes/Users.js';
import SwiftService from './routes/SwiftService.js';
import SwiftLog from './routes/SwiftLog.js';
import LogIn from './routes/LogIn.js';

function RouterConfig({ history }) {
  	return (
    	<Router history={history}>
    		<Route path="/" component={LogIn} />
      		<Route path="/monitor" component={IndexPage} />
      		<Route path="/service" component={SwiftService} />
      		<Route path="/log" component={SwiftLog} />
      		<Route path="/users" component={Users} />
    	</Router>
  );
}

export default RouterConfig;
