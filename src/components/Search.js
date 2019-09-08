import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { search, handleChange, handleSubmit } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto text-center mt-5">
            <h1 className="text-slanted text-capitalize">
              search recipes with
              <strong className="text-orange"> food2fork</strong>
            </h1>
            <form>
              <label htmlFor="search" className="text-capitalize">
                type recepies separated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  value={search}
                  placeholder="chicken, onion, carots"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
