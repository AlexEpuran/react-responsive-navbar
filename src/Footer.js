import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='social'>
				<FontAwesomeIcon className='icon-footer' icon={["fab", "facebook"]} />
				<FontAwesomeIcon className='icon-footer' icon={["fab", "youtube"]} />
				<FontAwesomeIcon className='icon-footer' icon={["fab", "instagram"]} />
				<FontAwesomeIcon className='icon-footer' icon={["fab", "linkedin"]} />
				<FontAwesomeIcon className='icon-footer' icon={["fab", "github"]} />
			</div>
		</div>
	);
};

export default Footer;
