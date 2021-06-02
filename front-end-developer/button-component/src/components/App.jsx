import './App.css';
import { Nav } from './Nav';

// - side bar
// - header
// - main section
// - button page
// - button component
//		- props: text, size, color, variant, disabled

function App() {
	const navLinks = [ "colors", "typography", "spaces", "buttons", "inputs", "grid" ];
  return (
		<main className="app">
			<aside className="sidebar">
				<span className="logo">
					<span className="orange">dev</span><span>challenges.io</span>
				</span>
				<Nav links={navLinks}/>
			</aside>
			<section className="content"></section>
		</main>
  );
}

export default App;
