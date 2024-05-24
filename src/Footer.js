import React from "react";
import LOgo from "./images/logo1.png";
import Reddit from "./images/reddit1.png";
import Githubedit from "./images/githubedit1.png";
import Telegram from "./images/telegram1.png";
import Discord from "./images/discord1.png";
import Miningpoolstats from "./images/miningpoolstats-logo1.png";
import Pepeexplorericon from "./images/pepeexplorer_with_fishing_pepe_icon1.png";
import coinpaprika from "./images/coinpaprika-logo1.png";
import Xeggex from "./images/xeggex-logo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrappers">
      <div className="footer-outer">
        <div className="container_rows">
          {" "}
          <div className="community-text">
            <h2>Community</h2>
            <p>Join r/Tiga Coin today!</p>
          </div>
          <div className="reddit-icon">
            <img src={Reddit} alt="Icon" />
          </div>
          <div className="social-icn">
            <ul>
              <li>
                <Link className="social-link" to="#">
                  {" "}
                  <img src={Githubedit} alt="Icon" />
                </Link>
              </li>
              <li>
                <Link className="social-link" to="#">
                  {" "}
                  <img src={Telegram} alt="Icon" />
                </Link>
              </li>
              <li>
                <Link className="social-link" to="#">
                  {" "}
                  <img src={Discord} alt="Icon" />
                </Link>
              </li>
              <li>
                <Link className="social-link" to="#">
                  {" "}
                  <img src={Miningpoolstats} alt="Icon" />
                </Link>
              </li>
              <li>
                <Link className="social-link" to="#">
                  {" "}
                  <img src={Pepeexplorericon} alt="Icon" />
                </Link>
              </li>
              <li>
                <Link className="social-link" to="#">
                  {" "}
                  <img src={coinpaprika} alt="Icon" />
                </Link>
              </li>
              <li>
                <Link className="social-link" to="#">
                  {" "}
                  <img src={Xeggex} alt="Icon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-bootm-copy">
            <p>
              Brand Assets Pack -<strong> Download</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
