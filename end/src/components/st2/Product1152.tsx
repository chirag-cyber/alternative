import React from "react";

const initialProducts: { id: number; title: string; price: number }[] = [
  { id: 1, title: "Product 1", price: 180 },
  { id: 2, title: "Product 2", price: 280 },
  { id: 3, title: "Product 3", price: 480 },
  { id: 4, title: "Product 4", price: 580 }
];

type PropsType = {};
type ProductsType = {
  id: number;
  title: string;
  price: number;
};
type StateType = {
  products: ProductsType[];
};
type RemoveHandlerType = {
  id: number;
};

class Product1152 extends React.Component<PropsType, StateType> {
  state = {
    products: initialProducts
  };

  removeHandler(props: RemoveHandlerType) {
    this.setState({
      products: this.state.products.filter((items) => props.id !== items.id)
    });
  }

  render() {
    return (
      <>
        <h1>Cart</h1>

        {this.state.products.length === 0 ? (
          <h1>Cart is Empty!</h1>
        ) : (
          this.state.products.map((items) => {
            return (
              <div
                key={items.id}
                style={{
                  border: "1px solid green",
                  borderRadius: "10px",
                  padding: "10px",
                  margin: "10px"
                }}
              >
                <h3>{items.title}</h3>
                <p>Price ${items.price}</p>
                <button
                  onClick={() => this.removeHandler({ id: items.id })}
                  style={{ cursor: "pointer" }}
                >
                  Remove
                </button>
              </div>
            );
          })
        )}
      </>
    );
  }
}
export default Product1152;
