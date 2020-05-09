import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
	<div>
		<h1>HOME</h1>
		<Link to="/now-playing">Playings Movies </Link>
		<Link to="/popular">Populars Movies </Link>
		<Link to="/top-rated">Rateds Movies </Link>
		<Link to="/upcoming">Upcomings Movies </Link>
	</div>
);

export default Home;