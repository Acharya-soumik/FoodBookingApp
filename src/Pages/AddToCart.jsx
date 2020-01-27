import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../Redux/Action";

function AddToCart(props) {
  console.log(props);
  let name = props.match.params.name;
  let food = props.yumms.find(ele => {
    return ele.name === name;
  });
  // console.log(props.yumms);
  console.log(food);

  // const clickHandler = () => {
  //   alert("added to cart,you can add more items or go to cart");
  //   props.addCart(food);
  // };

  return (
    <div>
      <h1 className="text-center display-3">{food.name}</h1>
      <table class="table table-striped table-dark w-50 m-auto">
        <thead>
          <tr>
            <th scope="col">Item name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {food.items.map(ele => {
            return (
              <tr>
                <td>{ele.item}</td>
                <td>{ele.price}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={e => {
                      alert("added to Cart");
                      return props.addCart({
                        item: ele.item,
                        price: ele.price
                      });
                    }}
                  >
                    Add To cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  yumms: state.getFood.rest
});

const mapDispatchToProps = dispatch => ({
  addCart: item => dispatch(addToCart(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
