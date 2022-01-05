import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/SignUp';
import PrivateRoute from '../components/PrivateRoute';


function Routes() {

	return (
        <Router>
            <Switch >
                <Route strict  path='/signup' exact >
                    <SignUp />
                </Route>
                <Route path='/signin' exact >
                    <Login />
                </Route>
                <PrivateRoute exact component={Dashboard} path="/" />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
		</Router>
	);
}

export default Routes;
