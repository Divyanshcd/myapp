import React from 'react'
import Home11 from '/images/home11.jpg'
import Home12 from '/images/home12.jpg'
import Home13 from '/images/home13.jpg'

const Blog = () => {
  return (
    <>
      <section id='blog' className="blog py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Latest from Our Blog</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={Home11} className="card-img-top" alt="Blog Post 1" />
                <div className="card-body">
                  <h5 className="card-title">Blog Post Title 1</h5>
                  <p className="card-text">A short excerpt from the blog post.</p>
                  <a href="#" className="btn btn-secondary">Read More</a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={Home12} className="card-img-top" alt="Blog Post 2" />
                <div className="card-body">
                  <h5 className="card-title">Blog Post Title 2</h5>
                  <p className="card-text">A short excerpt from the blog post.</p>
                  <a href="#" className="btn btn-secondary">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={Home13} className="card-img-top" alt="Blog Post 3" />
                <div className="card-body">
                  <h5 className="card-title">Blog Post Title 3</h5>
                  <p className="card-text">A short excerpt from the blog post.</p>
                  <a href="#" className="btn btn-secondary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
