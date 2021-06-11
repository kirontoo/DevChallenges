import './App.css';
import Nav from './Nav';
import ButtonPage from './ButtonPage';
import InputPage from './InputPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const navLinks = [ "colors", "typography", "spaces", "buttons", "inputs", "grid" ];

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
          <Route path="/buttons" component={ButtonPage}/>
          <Route path="/inputs" component={InputPage}/>
      	</section>
      </main>
    </Router>
  );
}

export default App;
