import React from 'react'
import './navbar.scss'
import logoText from '/logo-text.svg'
import logo from '/logo.svg'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<a href='#'>
					<img src={logo} alt='Logo' />
					<img src={logoText} alt='Logo' />
				</a>
			</div>

			<nav className='navbar__menu'>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>TV-Shows</a>
					</li>
					<li>
						<a href='#'>Popular</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
