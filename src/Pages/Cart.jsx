import React from "react";
import { connect } from "react-redux";
let sum = [];
function Cart({ food }) {
  sum = food.map(ele => parseInt(ele.price));
  console.log(sum);
  return (
    <div>
      <h2>Items in Cart</h2>
      <ul>
        {food.map(ele => (
          <li>{ele.name}</li>
        ))}
      </ul>

      <hr />
      <h2>CheckOut</h2>
      <p>Total Price is:</p>
    </div>
  );
}

const mapStateToProps = state => ({
  food: state.getFood.cart
});

export default connect(mapStateToProps)(Cart);
