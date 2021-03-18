import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
	const [showMobileLinks, setShowMobileLinks] = useState(false);
	const [icon, setIcon] = useState("bars");

	return (
		<div className='header-container'>
			<div className='Navbar'>
				<div className='leftSide'>
					<div className='links'>
						<a href='/home'>Home</a>
						<a href='/about'>About</a>
						<a href='/services'>Services</a>
						<a href='/potofolio'>Portofolio</a>
						<a href='/contact'>Contact</a>
						<FontAwesomeIcon
							onClick={() => {
								setShowMobileLinks(!showMobileLinks);
								setIcon(!icon);
							}}
							className='burger'
							icon={icon ? "bars" : "times"}
							size='2x'
						/>
					</div>
				</div>
				<div className='rightSide'>
					<input type='text' placeholder='search....'></input>
					<button>
						<FontAwesomeIcon className='icon-search' icon='search' />
					</button>
				</div>
			</div>
			<div className='mobile-links-container'>
				<div className={showMobileLinks ? "mobile-links-visible" : "mobile-links"}>
					<a href='/home'>Home</a>
					<a href='/about'>About</a>
					<a href='/services'>Services</a>
					<a href='/potofolio'>Portofolio</a>
					<a href='/contact'>Contact</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
