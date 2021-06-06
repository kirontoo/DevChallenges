import './App.css';
import Nav from './Nav';
import Button from './Button';

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
	    <div className="column">
	      <p className="button-name">&lt;Button /&gt;</p>
	      <Button>Default</Button>
	    </div>
	    <div className="column">
	      <p className="button-name hover-text">&:hover, &:focus</p>
	      <Button>Default</Button>
	    </div>
	  </div>

	  <div className="row">
	    <div className="column">
	      <p className="button-name">&lt;Button variant="outline"/&gt;</p>
	      <Button color="primary" variant="outline">Default</Button>
	    </div>
	    <div className="column">
	      <p className="button-name hover-text">&:hover, &:focus</p>
	      <Button color="primary" variant="outline">Default</Button>
	    </div>
	  </div>

	  <div className="row">
	    <div className="column">
	      <p className="button-name">&lt;Button variant="text" /&gt;</p>
	      <Button color="primary" variant="text">Default</Button>
	    </div>

	    <div className="column">
	      <p className="button-name hover-text">&:hover, &:focus</p>
	      <Button color="primary" variant="text">Default</Button>
	    </div>
	  </div>

	  <div className="row">
	    <div className="column">
	      <p className="button-name">&lt;Button disabledShadow /&gt;</p>
	      <Button color="primary" disableShadow>Default</Button>
	    </div>
	  </div>

	  <div className="row">
	    <div className="column">
	      <p className="button-name">&lt;Button disabled /&gt;</p>
	      <Button disabled>Disabled</Button>
	    </div>
	    <div className="column">
	      <p className="button-name">&lt;Button variant="text" disabled /&gt;</p>
	      <Button variant="text" disabled>Disabled text</Button>
	    </div>
	  </div>

	  <div className="row">
	    <div className="column">
	      <p className="button-name">&lt;Button startIcon="local_grocery_store" /&gt;</p>
	      <Button color="primary" startIcon="local_grocery_store">Default</Button>
	    </div>

	    <div className="column">
	      <p className="button-name">&lt;Button endIcon="local_grocery_store" /&gt;</p>
	      <Button color="primary" endIcon="local_grocery_store">Default</Button>
	    </div>
	  </div>

	  <div className="row">
	    <div className="column">
	      <p className="button-name">&lt;Button size="sm"/&gt;</p>
	      <Button size="sm">Default</Button>
	    </div>
	    <div className="column">
	      <p className="button-name">&lt;Button size="md"/&gt;</p>
	      <Button size="md">Default</Button>
	    </div>
	    <div className="column">
	      <p className="button-name">&lt;Button size="lg"/&gt;</p>
	      <Button size="lg">Default</Button>
	    </div>
	  </div>

	  <div className="row">
	    <div className="column">
	      <p className="button-name">&lt;Button /&gt;</p>
	      <Button>Default</Button>
	    </div>
	    <div className="column">
	      <p className="button-name">&lt;Button color="primary" /&gt;</p>
	      <Button color="primary" >Default</Button>
	    </div>
	    <div className="column">
	      <p className="button-name">&lt;Button color="secondary" /&gt;</p>
	      <Button color="secondary" >Default</Button>
	    </div>
	    <div className="column">
	      <p className="button-name">&lt;Button color="danger" /&gt;</p>
	      <Button color="danger" >Default</Button>
	    </div>
	  </div>

	  <div className="row">
	    <div className="column">
	      <p className="button-name hover-text">&:hover, &:focus</p>
	      <Button>Default</Button>
	    </div>
	    <Button color="primary">Primary</Button>
	    <Button color="secondary">Secondary</Button>
	    <Button color="danger">Danger</Button>
	  </div>

	  <div className="row">
	    <p className="footer">created by <a target="_blank" rel="noreferrer" href="https://www.github.com/kirontoo">kirontoo</a> - devchallenges.io
	    </p>
	  </div>
	</div>
      </section>
    </main>
  );
}

export default App;
