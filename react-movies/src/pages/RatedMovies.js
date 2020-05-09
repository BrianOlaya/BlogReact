import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviesRated({ rateds }) {
	return (
		<div className="rateds">
			<h1>Rateds Movies</h1>
			<Link to="/">HOME </Link>
			<Link to="/now-playing">Playings Movies </Link>
			<Link to="/popular">Populars Movies </Link>
			<Link to="/upcoming">Upcomings Movies </Link>
			{rateds &&
				rateds.length > 0 &&
				rateds.map((rated) => {
					return (
						<div className="rated" key={rated.id}>
							<h2>{rated.title}</h2>
							<p>{rated.overview}</p>
						</div>
					);
				})}
		</div>
	);
}

class RatedsMovies extends React.Component {
	state = {
		rateds: [],
		loading: true,
		error: false,
	};
	componentDidMount() {
		axios({
			url:
				"https://api.themoviedb.org/3/movie/top_rated?api_key=f784d51211ae6f36dd6a8855e3980923&language=en-US&page=1",
			method: "GET",
		})
			.then((response) => {
				this.setState({ rateds: response.data.results });
			})
			.catch((error) => {
				this.setState({ error: true });
			})
			.finally(() => {
				this.setState({ loading: false });
			});
	}
	render() {
		if (this.state.loading) return <p>...Loading</p>;
		if (this.state.error) return <p>Ups! something went wrong!</p>;
		return (
			<div className="App">
				<MoviesRated rateds={this.state.rateds} />
			</div>
		);
	}
}

export default RatedsMovies;
