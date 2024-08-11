import React from "react";

const Testimonials = () => {
  return (
    <>
      <section id="" className="testimonials py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://randomuser.me/api/portraits/women/22.jpg"
                      className="rounded-circle me-3"
                      alt="Customer 1"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div>
                      <p className="card-text">
                        "TrendLoom has completely transformed my wardrobe. Their
                        styles are amazing! The quality and designs are
                        top-notch."
                      </p>
                      <h5 className="card-title">~ Martina</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="rounded-circle me-3"
                      alt="Customer 2"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div>
                      <p className="card-text">
                        "I love the unique designs and quality of TrendLoom's
                        clothes! Each piece feels carefully crafted and
                        stylish."
                      </p>
                      <h5 className="card-title">~ Rodríguez</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://randomuser.me/api/portraits/women/67.jpg"
                      className="rounded-circle me-3"
                      alt="Customer 3"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div>
                      <p className="card-text">
                        "TrendLoom's fashion has completely changed the way I
                        dress. The attention to detail and comfort is
                        unmatched!"
                      </p>
                      <h5 className="card-title">~ Olivia</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <img
                      src="https://randomuser.me/api/portraits/men/9.jpg"
                      className="rounded-circle me-3"
                      alt="Customer 4"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div>
                      <p className="card-text">
                        "The stylish and comfortable clothes from TrendLoom are
                        now a staple in my wardrobe. Highly recommended for <strong>FL!</strong>"
                      </p>
                      <h5 className="card-title">~ Álvarez</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
