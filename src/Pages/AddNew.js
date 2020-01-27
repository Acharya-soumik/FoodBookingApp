import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFood } from "../Redux/Action";

let listItems = [];
function AddNew(props) {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const setFoodHandler = e => {
    let foodItems = {
      item,
      price
    };
    listItems.push(foodItems);
    setItem("");
    setPrice("");
  };

  const submitHandler = e => {
    e.preventDefault();
    const rest = {
      name,
      items: listItems,
      url: img
    };

    props.submitData(rest);
    setName("");
    setImg("");
    alert("data added succesfully");
    listItems = [];
  };

  return (
    <>
      <h2 className="text-center">Add A new Resturant</h2>
      <div className="col-md-6 text-center m-auto">
        <hr />
        <label>Name of Resturant</label>
        <input
          className="form-control"
          placeholder="Enter Name"
          onChange={e => setName(e.target.value)}
        />
        <hr />
        <div>
          <label>Enter Food Items</label>
          <input
            placeholder="Food Item"
            className="form-control"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
          <input
            placeholder="price"
            className="form-control"
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="number"
          />
          <button className="btn btn-danger" onClick={setFoodHandler}>
            Add Food Items
          </button>
        </div>
        <hr />
        <label>Enter An Image Url</label>
        <input
          placeholder="copy paste URl"
          className="form-control"
          onChange={e => setImg(e.target.value)}
        />
        <button className="btn btn-info" onClick={submitHandler}>
          Submit Details
        </button>
        <hr />
        {/* <Link className="text-dark  ml-auto" to="/">
          <button className="btn btn-info ">back to admin</button>
        </Link> */}
      </div>
    </>
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  submitData: item => dispatch(addFood(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);
