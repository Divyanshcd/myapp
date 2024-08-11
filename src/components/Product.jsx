import React from "react";
import Product1 from '/images/product1.jpg'
import Product2 from '/images/product2.jpg'
import Product3 from '/images/product3.jpg'
const Product = () => {
  return (
    <>
      <section id="product" className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={Product1}
                  className="card-img-top"
                  alt="Product 1"
               
                />
                <div className="card-body">
                  <h5 className="card-title">Product 1</h5>
                  <p className="card-text">$99.99</p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={Product2}
                  className="card-img-top"
                  alt="Product 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Product 2</h5>
                  <p className="card-text">$89.59</p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={Product3}
                  className="card-img-top"
                  alt="Product 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Product 3</h5>
                  <p className="card-text">$93.49</p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
