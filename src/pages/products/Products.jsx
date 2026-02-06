import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-primary text-light text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Our Products</h1>
          <p className="lead mt-3">
            Explore our wide range of products tailored to your needs
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card shadow h-100 text-center p-3">
                  <h4 className="fw-semibold">{product.title}</h4>
                  <img src={product.image} alt={product.title} className="img-fluid mb-3" />
                  <p className="text-primary fw-bold">Price ${product.price}</p>
                  <p className="text-secondary">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
