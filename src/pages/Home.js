import React, { Component } from "react";

import "./home.css";
import notebook from "../assets/notebook.png";
import kgf1 from "../assets/kgf1.jpg";

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
                  style={{ "max-width": "35%" }}
                />
              </div>
            </div>
          </div>
          {/* Buy now call to action button */}
          <div className="row justify-content-center">
            <div className="col-sm-4 justify-content-center mt-3 mb-5">
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
          {/* anime pic section */}
          <div className="row justify-content-center _bg-pink">
            <div className="col text-center">
              <img
                src={kgf1}
                alt="pink hair anime offering free NFT"
                className="img-fluid"
                style={{ "max-width": "40%" }}
              ></img>
            </div>
          </div>
          {/* Proof of huge weenis NFT */}
          <div className="row _bg-gray">
            <div className="col-12">
              <br></br>
              <br></br>
            </div>
            <div className="col-md-4"></div>

            <div className="col-md-4 text-gray text-left">
              <p className="_h1 ">Proof of Huge Weenis</p>
              <p>Introducing SudoCumRocket 💦🚀-{">"}🌙</p>
              <p>
                Listen up papa, you get 1 free NFT with every purchase of this
                notebook.
              </p>
              <p></p>
              <p>
                Owning this NFT proves on-chain that you have a huge weenis.
                Bigger than Lord Vitalik, no cap.
              </p>
              <p>Papi senpai, the waifus are gonna love you.</p>

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
                notebook purchase. Subject to change.
              </p>
              <br></br>
            </div>
          </div>
          {/* section 3 how tos */}
          <div className="row">
            <div className="col-md-4">
              <p></p>
            </div>
            <div className="col-md-4">
              <br></br>
              <p className="_h1">How to receive free NFT?</p>
              <p>
                After you purchase a notebook, wait for a follow up email asking
                for an ethereum address. We will then send the NFT to that
                provided address. We will never ask for you private key or seed
                phrase. Beware of scammers.
              </p>
              <p className="_h1">How to claim a notebook?</p>
              <p>Anyone who owns SudoCumRocket NFT can claim a notebook:</p>
              <p className="m-0">
                1. burn 2 NFTs to 0x000000000000000000000000000000000000dead
              </p>
              <p className="m-0">
                2. fill out this form:{" "}
                <a
                  href="https://forms.gle/UfNtm8ppETYgpj2w5"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://forms.gle/UfNtm8ppETYgpj2w5
                </a>
              </p>
              <p className="mt-0">3. success!</p>
            </div>
            <div className="col-md-4">
              <p></p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
