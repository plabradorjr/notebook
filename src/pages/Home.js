import React, { Component } from "react";

import "./home.css";
import notebook from "../assets/notebook.png";
import sample_nft from "../assets/sample-nft.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          {/* Notebook image section */}
          <div className="row justify-content-center">
            <div className="col text-center mt-5">
              <div className="col">
                <img
                  src={notebook}
                  alt="notebook"
                  className="img-fluid"
                  style={{ "max-width": "50%" }}
                />
              </div>
            </div>
          </div>
          {/* Buy now call to action button */}
          <div className="row justify-content-center">
            <div className="col-5 justify-content-center mt-3 mb-5">
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
          {/* Free NFT Section */}
          <div className="row _bg-gray">
            <div className="col-12">
              <br></br>
              <br></br>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 text-center">
              <img
                src={sample_nft}
                alt="sudocumrocket nft"
                className="img-fluid mb-4"
                style={{ "max-width": "50%" }}
              />
            </div>
            <div className="col-md-4 text-gray text-left">
              <p className="_h1 ">
                Free NFT per purchase - Proof of Huge Weenis
              </p>
              <p>Introducing SudoCumRocket 💦🚀</p>
              <p>
                The free NFT that comes with every purchase of this BDE
                notebook.
              </p>
              <p></p>
              <p>
                By owning this NFT, you prove on-chain that you have a huge
                weenis. Bigger than Lord Vitalik indeed.
              </p>
              <p>Senpai, the waifus are gonna love you.</p>

              <div className="col-10 justify-content-center mt-3 mb-3 pl-0">
                <a
                  href="https://sudoswap.xyz/#/browse/buy/0xB2A4951259c4B086Aa0d28764626Eb21f495BEAB"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sm btn-block btn"
                  id="btn-secondary"
                >
                  View NFT On SudoSwap
                </a>
              </div>
              <p className="small">
                *free NFT subject to sudoswap liquidity. NFT will only be free
                if sudoswap floor offer is less than 0.02 ETH at the time of
                notebook purchase.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>test</p>
            </div>
            <div className="col-md-4">
              <p>test</p>
            </div>
            <div className="col-md-4">
              <p>test</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
