import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Contact } from "../../pages/Contact";
import { Journal } from "../../pages/Journal.jsx";
import { TodoList } from "../../pages/TodoList";

export const Main = () => {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="journal" element={<Journal />} />
					<Route path="todo" element={<TodoList />} />
				</Routes>
			</div>
		</>
	);
};
