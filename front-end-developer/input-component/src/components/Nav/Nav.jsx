import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

export function Nav () {
	const links = [ "colors", "typography", "spaces", "buttons", "inputs", "grid" ];

	const buildNavLinks = () => {
		return links.map( l => (
			<li key={l} className="nav-link">
				<NavLink to={`/${l}`} activeStyle={{ color: "rgbar(var(--active-color), 1)", fontWeight: 700 }}>
					{ l }
				</NavLink>
			</li> 
		))
	}

	return (
		<nav className="nav">
			<ul className="nav-list">
				{ buildNavLinks() }
			</ul>
		</nav>
)};
