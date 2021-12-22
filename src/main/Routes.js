
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import SignUp from '../pages/SignUp';
import PrivateRoute from '../components/PrivateRoute';


function Routes() {
	const {user} = useSelector(state => state.user)

	return (
        <Router>
            <Switch >
                <Route strict  path='/signup' exact={true} >
                    <SignUp />
                </Route>
                <Route path='/signin' exact={true} >
                    <Login />
                </Route>
                <PrivateRoute component={Dashboard} path="/" />
                
            </Switch>
		</Router>
	);
}

export default Routes;
