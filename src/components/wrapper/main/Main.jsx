import React from "react";
import { Route, Routes } from "react-router-dom";
import { Vite } from "../../pages/Vite";
import { TodoList } from "../../pages/TodoList.jsx";

export const Main = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Vite />} />
				<Route path="todo" element={<TodoList />} />
			</Routes>
		</div>
	);
};
