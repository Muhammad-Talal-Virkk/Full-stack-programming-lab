function Products() {
  const items = [
    { id: 1, title: "Product 1", desc: "Description 1" },
    { id: 2, title: "Product 2", desc: "Description 2" }
  ];

  return (
    <div>
      <h2>Products</h2>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <button onClick={() => alert("Added to Cart")}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;