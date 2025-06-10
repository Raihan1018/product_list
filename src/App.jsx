import React from "react";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Product A",
      price: 40,
    },
    {
      id: 2,
      name: "Product B",
      price: 50,
    },
    {
      id: 3,
      name: "Product C",
      price: 90,
    },
  ];
  return (
    <div className="px-4 py-28 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-300 p-4 rounded-md shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-lg my-3">${product.price}</p>
            <button className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 mouse-pointer">
              Add to cart
            </button>
          </div>
        ))}
      </div>
      {/* cart item */}
      <h2 className="text-xl font-bold mt-5">Cart</h2>
      <p className="text-gray-600">Your Cart is empty:</p>
    </div>
  );
};

export default App;
