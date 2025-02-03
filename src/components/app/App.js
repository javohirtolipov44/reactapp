import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import SearchPanel from "../search-panel/search-panel";
import "./App.css";

function App() {
  const data = [
    { name: "Solo Leveling", season: "s1", serie: 5, id: 1, favourite: false },
    { name: "Dr Stoun", season: "s1", serie: 4, id: 2, favourite: true },
    {
      name: "Hunter x Hunter",
      season: "s1",
      serie: 32,
      id: 3,
      favourite: false,
    },
  ];

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
  );
}

export default App;
