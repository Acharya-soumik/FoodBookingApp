import React from "react";
import { connect } from "react-redux";
import { placeOrder } from "../Redux/Action";

let sum = [];
let amt = 0;
function Cart({ food, placeOrder, foodHistory }) {
  amt = 0;
  sum = food.map(ele => parseInt(ele.price));
  if (sum.length > 0) {
    for (let i = 0; i < sum.length; i++) {
      amt += Number(sum[i]);
    }
  }

  return (
    <div className="text-center">
      <p className="lead">Previous Orders</p>
      <div>
        <p>Order History</p>
        <ul>
          {foodHistory.map(ele => {
            return <li>{`Item name : ${ele.item} Price: Rs ${ele.price}`}</li>;
          })}
        </ul>
      </div>
      <hr />
      <hr />
      <h2>Items in Cart</h2>
      <ul>
        {food.map(ele => (
          <li>{`Item name : ${ele.item} Price: Rs ${ele.price}`}</li>
        ))}
      </ul>

      <hr />
      <h2>CheckOut</h2>
      <p>Total Price is: Rs {amt}</p>
      <button className="btn btn-success" onClick={placeOrder}>
        Order Now
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  placeOrder: () => dispatch(placeOrder())
});

const mapStateToProps = state => ({
  food: state.getFood.cart,
  foodHistory: state.getFood.orderHistory
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
