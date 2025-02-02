import "./movies-add-form.css";
function MoviesAddForm() {
  return (
    <div className="movies-add-form">
      <h3>Yangi anime qo'shish</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday anime?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechi marotaba ko'rilgan"
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
}

export default MoviesAddForm;
