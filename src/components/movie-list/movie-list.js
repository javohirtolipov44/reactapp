import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";

function MovieList({ data }) {
  return (
    <div className="movie-list">
      {data.map((item) => (
        <MovieListItem name={item.name} viewers={item.viewers} key={item.id} />
      ))}
    </div>
  );
}

export default MovieList;
