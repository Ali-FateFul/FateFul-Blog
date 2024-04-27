import React from "react";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout";
import { Navigate, Route, Routes } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/blogs/:slug'
						element={<BlogPage />}
					/>
					<Route
						path='/authors/:slug'
						element={<AuthorPage />}
					/>
					<Route
						path='/blogs'
						element={<Navigate to='/' />}
					/>
					<Route
						path='/authors'
						element={<Navigate to='/' />}
					/>
				</Routes>
			</Layout>
		</>
	);
}

export default App;
