import "./app-filter.css";

function AppFilter() {
  return (
    <div className="btn-group">
      <button className="btn btn-dark" type="button">
        Barcha animelar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Mashxur animelar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Ko'p ko'rilgan animelar
      </button>
    </div>
  );
}

export default AppFilter;
