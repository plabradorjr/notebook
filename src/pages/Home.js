import React, { Component } from "react";
import "./home.css";
import notebook from "../assets/notebook.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col text-center mt-5">
              <div className="col">
                <img
                  src={notebook}
                  alt="notebook"
                  className="img-fluid"
                  style={{ "max-width": "90%" }}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 justify-content-center mt-3 mb-10">
              <a
                href="https://buy.howtolivewithahugepenis.com/products/how-to-live-with-a-huge-penis-notebook"
                rel="noreferrer"
                className="btn btn-block btn mb-1"
                id="btn-gradient"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
