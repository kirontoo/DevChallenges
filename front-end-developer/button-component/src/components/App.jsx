import './App.css';
import Nav from './Nav';
import Button from './Button';

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
			<section className="content">
				<h1>buttons</h1>
				<div className="button-list">
					<div className="row">
						<Button color="primary">Primary</Button>
						<Button color="secondary">Secondary</Button>
						<Button color="danger">Danger</Button>
						<Button>Default</Button>
					</div>
					<div className="row">
						<Button variant="text">Variant text</Button>
						<Button variant="outline">Variant outline</Button>
					</div>
					<div className="row">
						<Button color="primary">Primary</Button>
						<Button disabled>Disabled</Button>
						<Button startIcon="shopping_cart">Default</Button>
						<Button endIcon="shopping_cart">Default</Button>
						<Button disabledShadow>no shadow</Button>
					</div>
				</div>
			</section>
		</main>
  );
}

export default App;
