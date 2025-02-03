import { Component } from "react";
import "./movies-add-form.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      season: "",
      serie: "",
    };
  }

  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="movies-add-form">
        <h3>Yangi anime qo'shish</h3>
        <form className="add-form d-flex">
          <input
            name="name"
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday anime?"
            onChange={this.changeHandlerInput}
          />
          <input
            name="season"
            type="text"
            className="form-control new-post-label"
            placeholder="Nechi fasl?"
            onChange={this.changeHandlerInput}
          />
          <input
            name="serie"
            type="text"
            className="form-control new-post-label"
            placeholder="Nechi qism?"
            onChange={this.changeHandlerInput}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
