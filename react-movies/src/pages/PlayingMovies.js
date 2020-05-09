import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviesPlaying({ playings }) {
	return (
		<div className="playings">
			<h1>Playings Movies</h1>
			<Link to="/">HOME </Link>
			<Link to="/popular">Populars Movies </Link>
			<Link to="/top-rated">Rateds Movies </Link>
			<Link to="/upcoming">Upcomings Movies </Link>
			{playings &&
				playings.length > 0 &&
				playings.map((playing) => {
					return (
						<div className="playing" key={playing.id}>
							<h2>{playing.title}</h2>
							<p>{playing.overview}</p>
						</div>
					);
				})}
		</div>
	);
}

class PlayingMovies extends React.Component {
	state = {
		playings: [],
		loading: true,
		error: false,
	};
	componentDidMount() {
		axios({
			url:
				"https://api.themoviedb.org/3/movie/now_playing?api_key=f784d51211ae6f36dd6a8855e3980923&language=en-US&page=1",
			method: "GET",
		})
			.then((response) => {
				this.setState({ playings: response.data.results });
			})
			.catch((error) => {
				this.setState({ error: true });
			})
			.finally(() => {
				this.setState({ loading: false });
			});
	}
	render() {
		if (this.state.loading) return <p>Loading....</p>;
		if (this.state.error) return <p>Ups! something went wrong!</p>;
		return (
			<div className="App">
				<MoviesPlaying playing={this.state.playings} />
			</div>
		);
	}
}

export default PlayingMovies;