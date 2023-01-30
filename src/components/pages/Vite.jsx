import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import scss from "./Vite.module.scss";

export const Vite = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className={scss.vite}>
				<div className={scss.App}>
					<div>
						<a href="https://vitejs.dev" target="_blank">
							<img src="/vite.svg" className={scss.logo} alt="Vite logo" />
						</a>
						<a href="https://reactjs.org" target="_blank">
							<img
								src={reactLogo}
								className={`${scss.logo} ${scss.react}`}
								alt="React logo"
							/>
						</a>
					</div>
					<h1>Vite + React</h1>
					<div className={scss.card}>
						<button onClick={() => setCount((count) => count + 1)}>
							count is {count}
						</button>
						<p>
							Edit <code>src/App.jsx</code> and save to test HMR
						</p>
					</div>
					<p className={scss.read_the_docs}>
						Click on the Vite and React logos to learn more
					</p>
				</div>
			</div>
		</>
	);
};
