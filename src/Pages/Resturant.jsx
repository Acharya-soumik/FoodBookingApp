import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Resturant({ food }) {
  let data = food.rest;
  console.log(data);
  return (
    <section>
      <div>
        <h2>Restaurants</h2>
        <div className="col-md-10 row container">
          {data.map(ele => {
            return (
              <div className="md-col-4">
                <div className="card">
                  <img
                    src="https://source.unsplash.com/random/300x300"
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <h2 className="card-title">{ele.name}</h2>
                    <Link to={`/resturants/${ele.name}`}>
                      <button className="btn btn-info">View More</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  food: state.getFood
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Resturant);
