import React, { useState } from "react";

type ItemType = {
  id: number;
  title: string;
  price: number;
};

function CreateItems() {
  const [userInput, setUserInput] = useState<ItemType>({
    id: 0,
    title: "",
    price: 0
  } as ItemType);
  const [products, setProducts] = useState<ItemType[]>([]);
  const [cartItems, setCartItems] = useState<ItemType[]>([]);

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({
      ...userInput,
      id: Date.now(),
      [event.target.name]: event.target.value
    });
  }

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    if (userInput.price !== 0 && userInput.title.trim() !== "") {
      setProducts([...products, userInput]);
    }
    setUserInput({ id: 0, title: "", price: 0 });
  }

  function addToCart(item: ItemType) {
    setCartItems([...cartItems, item]);
  }

  function removeItem(id: number) {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== id;
      })
    );
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          placeholder="Product name"
          value={userInput.title}
          onChange={inputHandler}
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={userInput.price}
          onChange={inputHandler}
        />
        <br />
        <button>Add</button>
      </form>

      <h1>Products List</h1>
      {products && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid royalblue",
            borderRadius: "10px"
          }}
        >
          {products.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  border: "1px solid green",
                  borderRadius: "10px",
                  padding: "10px",
                  margin: "10px"
                }}
              >
                <h4>{product.title}</h4>
                <p>Price ${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      )}

      <h1>Cart</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid royalblue",
          borderRadius: "10px"
        }}
      >
        {cartItems &&
          cartItems.map((items) => {
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
                <h4>{items.title}</h4>
                <p>Price ${items.price}</p>
                <button onClick={() => removeItem(items.id)}>Remove</button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default CreateItems;
