import './App.css';
import Nav from './Nav';
import ButtonPage from './ButtonPage';
import InputPage from './InputPage';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

function App() {
	return (
		<Router>
			<main className="app">
				<aside className="sidebar">
					<span className="logo">
						<span className="orange">dev</span><span>challenges.io</span>
					</span>
					<Nav/>
				</aside>
				<section className="content">
					<Route exact path="/" component={InputPage}/>
					<Redirect from="/" to="/inputs"/>
					<Switch>
						<Route exact path="/buttons" component={ButtonPage}/>
						<Route exact path="/inputs" component={InputPage}/>
						<Route path='*'>
							<h1 className="content-title">This page does not exist.</h1>
						</Route>
					</Switch>
				</section>
			</main>
		</Router>
	);
}

export default App;
