import './App.css';
import Home from './Pages/Home/Home/Home';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/appointment">
						<Appointment />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
