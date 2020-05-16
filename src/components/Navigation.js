import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
			<header className="navigation">
				<p className="logo">Rosten<span className="rosten-notes">Notes</span></p>
				<nav>
				<a href="#">Inicio</a>
				<a href="#">Notas</a>
				<a href="#">Blog</a>
				<a href="#">Acerca</a>
				</nav>
			</header>
		);
	}
}

export default Navigation;