import React from "react";
import "./Style.scss";
import pic from "../../assets/Front-end-dev.gif";

export const Contact = () => {
	return (
		<>
			<div>
				<h1>Contact</h1>
				<img className="pic" src={pic} alt="" />
			</div>
		</>
	);
};
