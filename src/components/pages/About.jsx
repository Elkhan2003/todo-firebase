import React from "react";
import "./Style.scss";
import pic from "../../assets/standard.gif";

export const About = () => {
	return (
		<>
			<div>
				<h1>About</h1>
				<img className="pic" src={pic} alt="" />
			</div>
		</>
	);
};
