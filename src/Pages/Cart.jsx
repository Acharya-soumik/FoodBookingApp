import React from "react";
import { connect } from "react-redux";
import { placeOrder, clearHistory } from "../Redux/Action";

let sum = [];
let amt = 0;
function Cart({ food, placeOrder, foodHistory, clear, delItem }) {
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
            return (
              <li className="breadcrumb-item">{`Item name : ${ele.item} Price: Rs ${ele.price}`}</li>
            );
          })}
        </ul>
        {foodHistory.length ? (
          <p className="lead" onClick={() => clear()}>
            Clear History
          </p>
        ) : (
          <span>Previous Order : 0</span>
        )}
      </div>
      <hr />
      <hr />
      <h2>Items in Cart</h2>
      <ul>
        {food.map(ele => (
          <p>
            {`Item name : ${ele.item} Price: Rs ${ele.price}`}
            <span
              className="ml-3 badge badge-danger"
              onClick={() => alert("sure want to delete ?")}
            >
              remove
            </span>
          </p>
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
  placeOrder: () => dispatch(placeOrder()),
  clear: () => dispatch(clearHistory())
  // delItem: item => dispatch(delItem(item))
});

const mapStateToProps = state => ({
  food: state.getFood.cart,
  foodHistory: state.getFood.orderHistory
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
