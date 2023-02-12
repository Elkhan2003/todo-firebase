import React from "react";
import "./Footer.scss";
import {
	FaInstagram,
	FaLinkedin,
	FaGithub,
	FaTelegram,
	FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => {
	return (
		<>
			<div className="icons">
				<a href="https://www.instagram.com/elcho911" target="_blank">
					<FaInstagram id="instagram" />
				</a>
				<a href="https://www.linkedin.com/in/elcho911/" target="_blank">
					<FaLinkedin id="linkedin" />
				</a>
				<a href="https://github.com/Elkhan2003" target="_blank">
					<FaGithub id="github" />
				</a>
				<a href="https://t.me/Elcho911" target="_blank">
					<FaTelegram id="telegram" />
				</a>
				<a href="https://wa.me/996990385056" target="_blank">
					<FaWhatsapp id="whatsapp" />
				</a>
			</div>
		</>
	);
};
