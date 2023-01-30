import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
	const location = useLocation();
	return (
		<div className="header">
			<button disabled={false}>Admin Panel</button>
			<Link to={`/`} className="link">
				<span className={location.pathname === "/" ? "active-link" : ""}>
					Vite
				</span>
			</Link>
			<Link to={`/todo`} className="link">
				<span className={location.pathname === "/todo" ? "active-link" : ""}>
					Todo
				</span>
			</Link>
		</div>
	);
};
