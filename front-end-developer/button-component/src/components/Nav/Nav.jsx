import React from 'react';
import './Nav.css'

export function Nav ( { links } ) {
	const buildNavLinks = () => {
		return links.map( l => <li key={l} className={ `nav-link ${( l  === 'buttons' ) ? 'active' : ''}`  }><a>{ l }</a></li> )
	}

	return (
		<nav className="nav">
			<ul className="nav-list">
				{ buildNavLinks() }
			</ul>
		</nav>
)};
