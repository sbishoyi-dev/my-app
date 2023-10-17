const Movie = ({ movie }) => {
        return (
                <li className="movie" key={movie.id}>
                        <img src={movie.poster} alt={movie.title} width="300px" height="480px" />
                        <p>
                                {movie.title} by {movie.director} was released on {movie.year}.
                        </p>
                        <p>The movie was rated {movie.rating}.</p>
                </li>
        )
}

export default Movie;