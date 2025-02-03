import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import SearchPanel from "../search-panel/search-panel";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Solo Leveling",
          season: "s1",
          serie: 5,
          id: 1,
        },
        { name: "Dr Stoun", season: "s1", serie: 4, id: 2 },
        {
          name: "Hunter x Hunter",
          season: "s1",
          serie: 32,
          id: 3,
        },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({ data: data.filter((c) => c.id !== id) }));
  };

  addForm = (e, item) => {
    e.preventDefault();
    this.setState(({ data }) => ({
      data: [...data, { ...item, id: uuidv4() }],
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
