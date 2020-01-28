import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Admin({ loggedIn }) {
  if (loggedIn) {
    return (
      <div className="text-center m-4">
        <div className="bg-dark ">
          <h2>Daily Sales Report</h2>
        </div>
        <div className="bg-dark">
          <h2>OverAll Sales report</h2>
        </div>
        <h1>
          <Link to="/admin/add" className="text-dark">
            Add A New Resturant
          </Link>
        </h1>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.isAuth
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
