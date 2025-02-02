import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import SearchPanel from "../search-panel/search-panel";
import "./App.css";

function App() {
  const data = [
    { name: "Solo Leveling", viewers: 812, id: 1, favourite: false },
    { name: "Dr Stoun", viewers: 999, id: 2, favourite: true },
    { name: "Hunter x Hunter", viewers: 900, id: 3, favourite: false },
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
