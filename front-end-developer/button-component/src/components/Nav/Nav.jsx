import React from 'react';

export function Nav ( { links } ) {
	const buildNavLinks = () => {
		return links.map( l => {
			return (
				<li className="nav-link">{ l }</li>
			)
		})
	}

	return <nav className="nav">{ buildNavLinks() }</nav>
}
