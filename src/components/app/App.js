import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import "./App.css";

function App() {
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
