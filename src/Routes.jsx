import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Resturant from "./Pages/Resturant";
import Cart from "./Pages/Cart";
import AddNew from "./Pages/AddNew";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AddToCart from "./Pages/AddToCart";

const errorPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <a href="" className="link_404">
                  <Link to="/">Go to Home</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Routes() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://image.flaticon.com/icons/svg/2478/2478587.svg"
            className="food-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <Link to="/" className="nav-link text-dark">
                  Home
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/resturants" className="nav-link text-dark">
                  Resturants
                </Link>
              </a>
            </li>
            <li className="nav-item m-auto">
              <a className="nav-link" href="#">
                <Link to="/cart" className="nav-link text-dark">
                  Cart
                </Link>
              </a>
            </li>
            <li className="nav-item m-auto">
              <a className="nav-link" href="#">
                <Link to="/admin" className="nav-link text-dark">
                  Admin Panel
                </Link>
              </a>
            </li>
          </ul>
          <Link to="/login" className="text-ligt">
            <button className="btn btn-dark">Login/SignUp</button>
          </Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/resturants" component={() => <Resturant />} />
        <Route exact path="/cart" component={() => <Cart />} />
        <Route exact path="/admin" component={() => <Admin />} />
        <Route exact path="/admin/add" component={() => <AddNew />} />
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/signup" component={() => <SignUp />} />
        <Route
          path="/resturants/:name"
          component={props => <AddToCart {...props} />}
        />
        <Route render={errorPage} />
      </Switch>
    </div>
  );
}

export default Routes;
