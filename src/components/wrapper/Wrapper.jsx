import React from "react";
import scss from "./Wrapper.module.scss";
import { Header } from "./header/Header.jsx";
import { Main } from "./main/Main.jsx";
import { Footer } from "./footer/Footer.jsx";

export const Wrapper = () => {
	return (
		<>
			<div className={scss.wrapper}>
				<header className={scss.header}>
					<Header />
				</header>
				<main className={scss.main}>
					<Main />
				</main>
				<footer className={scss.footer}>
					<Footer />
				</footer>
			</div>
		</>
	);
};
