import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function MoviesPopular({ populars }) {
    return (
        <div className="populars">
            <h1>populars Movies</h1>
            <Link to="/">HOME </Link>
            <Link to="/now-playing">Playings Movies </Link>
            <Link to="/top-rated">Rateds Movies </Link>
            <Link to="/upcoming">Upcomings Movies </Link>
            {populars &&
                populars.length > 0 &&
                populars.map((popular) => {
                    return (
                        <div className="playing" key={popular.id}>
                            <h2>{popular.title}</h2>
                            <p>{popular.overview}</p>
                        </div>
                    );
                })}
        </div>
    );

}
class PopularsMovies extends React.Component {
    state = {
        populars: [],
        loading: true,
        error: false,
    };
    componentDidMount() {
        axios({
            url:
                "https://api.themoviedb.org/3/movie/popular?api_key=f784d51211ae6f36dd6a8855e3980923&language=en-US&page=1",
            method: "GET",
        })
            .then((response) => {
                this.setState({ populars: response.data.results });
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
                <MoviesPopular populars={this.state.populars} />
            </div>
        );
    }
}

export default PopularsMovies;