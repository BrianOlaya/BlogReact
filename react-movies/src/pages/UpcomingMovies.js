import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviesUpcoming({ upcoming }) {
	return (
		<div className="rateds" key="upcoming.id">
			<h1>Upcoming Movies</h1>
			<Link to="/">HOME </Link>
			<Link to="/now-playing">Playings Movies </Link>
			<Link to="/popular">Populars Movies </Link>
			<Link to="/top-rated">Rateds Movies </Link>
			{upcoming &&
				upcoming.length > 0 &&
				upcoming.map((rated) => {
					return (
						<div className="rated" key={upcoming.id}>
							<h2>{upcoming.title}</h2>
							<p>{upcoming.overview}</p>
						</div>
					);
				})}
		</div>
	);
}

class UpcomingMovies extends React.Component {
	state = {
		upcomings: [],
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
				this.setState({ upcomings: response.data.results });
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
				<MoviesUpcoming upcomings={this.state.upcomings} />
			</div>
		);
	}
}

export default UpcomingMovies;
