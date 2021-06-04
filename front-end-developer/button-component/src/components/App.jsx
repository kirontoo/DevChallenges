import './App.css';
import Nav from './Nav';
import Button from './Button';

// - button page
// - button component
//		- props: text, size, color, variant, disabled
//		TODO: labels for the buttons

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
	    <Button>Default</Button>
	  </div>
	  <div className="row">
	    <Button variant="outline">outline default</Button>
	    <Button color="primary" variant="outline">outline primary</Button>
	    <Button color="danger" variant="outline">outline danger</Button>
	  </div>
	  <div className="row">
	    <Button color="danger" variant="text">Variant text</Button>
	    <Button variant="text">Variant text</Button>
	  </div>
	  <div className="row">
	    <Button color="primary" disabledShadow>no shadow</Button>
	  </div>
	  <div className="row">
	    <Button disabled>Disabled</Button>
	    <Button variant="text" disabled>Disabled text</Button>
	  </div>
	  <div className="row">
	    <Button color="primary" startIcon="shopping_cart">Default</Button>
	    <Button color="primary" endIcon="shopping_cart">Default</Button>
	  </div>
	  <div className="row">
	    <Button>Default</Button>
	    <Button color="primary">Primary</Button>
	    <Button color="secondary">Secondary</Button>
	    <Button color="danger">Danger</Button>
	  </div>
	  <div className="row">
	    <Button>Default</Button>
	    <Button color="primary">Primary</Button>
	    <Button color="secondary">Secondary</Button>
	    <Button color="danger">Danger</Button>
	  </div>
	</div>
      </section>
    </main>
  );
}

export default App;
