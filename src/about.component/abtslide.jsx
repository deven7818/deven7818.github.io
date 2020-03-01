import React, { Component } from 'react'
import './abtslide.style.css';
 class abtslide extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="abtbgclr  animated animatedFadeInUp fadeInUp">
              <div id="aboutsld" className="carousel slide" data-ride="carousel">
                <div className="text-center mb-3 text-dark">
                  <br />
                  <br />
                  <h1>ABOUT</h1>
                </div>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
                      <i className="aiconH fas fa-comment fa-4x"></i>
                      <h4 className="text-center">Tell Us What You Need</h4>
                      <p className="text-center">
                        Our engineers develop new features using the latest
                        technology to deliver a user-friendly, robust product.{" "}
                      </p>
                    </div>
                  </div>       

                  <div className="carousel-item">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
                      <i className="aiconH fa fa-handshake-o fa-4x"></i>
                      <h4 className="text-center">Our Moto</h4>
                      <p>
                        The purpose of a business is to create a customer who
                        creates customers.
                      </p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
                      <i class="aiconH fas fa-cogs fa-2x"></i>
                      <h4 className="text-center">Reach Out Anytime</h4>
                      <p>
                        We provide both online and telephonic assistance.Thanks
                        to our dedicated support, we have 99% customer retention
                        and 100% satisfaction. Our account managers and
                        competent support team promptly respond to requests and
                        make sure your work never stops.
                      </p>
                    </div>
                  </div>
                </div>
                <a href="#aboutsld" className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a href="#aboutsld" className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default abtslide
