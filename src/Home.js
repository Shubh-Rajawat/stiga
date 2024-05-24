import React from "react";
import { Link } from "react-router-dom";
//import Tigah from "./images/$TIGA.png";
import Tarrow from "./images/arrow.png";
import Partners1 from "./images/Partners1.png";
import Partners2 from "./images/Partners2.png";
import Partners3 from "./images/Partners3.png";
import Partners4 from "./images/Partners4.png";
import Partners5 from "./images/Partners5.png";
import Partners6 from "./images/Partners6.png";
import Partners7 from "./images/Partners7.png";
import Partners8 from "./images/Partners8.png";
import Partners9 from "./images/Partners9.png";
import Partners10 from "./images/Partners10.png";
import Partners11 from "./images/Partners11.png";
import Partners12 from "./images/Partners12.png";
import Partners13 from "./images/Partners13.png";
import Bitmap from "./images/Bitmap.png";
import Solanasollogo from "./images/solana-sol-logo.png";
import Dogwifhat from "./images/Dogwifhat.png";
import Ethereum from "./images/Ethereum.png";
import TigaPitch3 from "./images/TigaPitch3.png";
import WhosTIGA from "./images/Bitmap-whosTIGA.png";
import Presalestarts from "./images/Presalestarts.png";
import HQbepixelart from "./images/HQbepixelart.png";
import HQ3Dactioshots from "./images/HQ3Dactioshots.png";
import Usdclogo from "./images/Usdclogo.png";
import Usdtlogo from "./images/Usdtlogo.png";
import Ethlogo from "./images/Ethlogo.png";
import Bnblogo from "./images/Bnblogo.png";
import Sollogo from "./images/Sollogo.png";
import Arbogo from "./images/Arbogo.png";
import Maticlogo from "./images/Maticlogo.png";
import Faq from "react-faq-component";

//import "./home.css";
import Modal from "react-modal";
export const Home = () => {
  // user select options start
  const switchCoinData = [
    {
      name: "USDC",
      logo: Usdclogo
    },
    {
      name: "USDT",
      logo: Usdtlogo
    },
    {
      name: "ETH",
      logo: Ethlogo
    },
    {
      name: "BNB",
      logo: Bnblogo
    },
    {
      name: "SOL",
      logo: Sollogo
    },
    {
      name: "ARB",
      logo: Arbogo
    },
    {
      name: "MATIC",
      logo: Maticlogo
    }
  ];
  const networkCoinData = [
    {
      name: "BSC",
      logo: Usdclogo
    },
    {
      name: "USDT",
      logo: Usdtlogo
    },
    {
      name: "ETH",
      logo: Ethlogo
    },
    {
      name: "BNB",
      logo: Bnblogo
    },
    {
      name: "SOL",
      logo: Sollogo
    },
    {
      name: "ARB",
      logo: Arbogo
    },
    {
      name: "MATIC",
      logo: Maticlogo
    }
  ];
  const [ options, setOptions ] = React.useState( "switch-token" );
  const [ selectedCoin, setSelectedCoin ] = React.useState( switchCoinData[ 0 ] );
  const handleOptionChange = ( e ) => {
    console.log( "option", e.target.value );
    setOptions( e.target.value );
    if ( e.target.value == "switch-token" ) {
      setSelectedCoin( switchCoinData[ 0 ] );
    } else {
      setSelectedCoin( networkCoinData[ 0 ] );
    }
  };

  const handleCoin = ( value ) => {
    setSelectedCoin( value );
  };
  // user select options End


  ///////Faq
  const data = {
    rows: [
      {
        title: "What is a pre-sale?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "What is TIGA COIN?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Why are we doing a pre-sale?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "What is the $TIGA token?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Are my tokens protected?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Does it have a vesting period?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
    ],
  };

  const styles = {
    bgColor: "transparent",
    titleTextColor: "blue",
    rowTitleColor: "white",
    rowContentColor: "white",
    arrowColor: "white",

    rowContentPaddingLeft: "20px",
    rowContentPaddingRight: "20px",
    rowContentPaddingTop: "20px",
    rowContentPaddingBottom: "20px",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  ///////Faq close

  // modal style
  let subtitle;
  const [ modalIsOpen, setIsOpen ] = React.useState( false );
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen( true );
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen( false );
  }

  ////
  return (
    <div className="wrappers">
      <section className="banner-slide">
        <div className="container_rows">
          <div className="banner-slide-outer">
            <h1>$TIGA </h1>
            <h2> Play. To. Burn</h2>
            <div className="banner-btn">
              { " " }
              <Link className="link-angle-down" to="#">
                <img src={ Tarrow } alt="Icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="presalestarts-section">
        <div className="container_rows">
          <div className="presalestarts-section-outer">
            <div className="presalestarts-section-item">
              <div className="presalestarts-left">
                <img src={ Presalestarts } alt="Icon" />
              </div>
              <div className="presalestarts-right">
                { " " }
                <div className="presalestarts">
                  <div className="Presale-box">
                    { " " }
                    <h2>PreSale starts in:</h2>
                    <ul>
                      <li>
                        <span>0</span> <p>DayS</p>
                      </li>
                      <li>
                        <span>2</span> <p>Hours</p>
                      </li>
                      <li>
                        <span>10</span> <p>Min</p>
                      </li>
                      <li>
                        <span>39</span> <p>Sec</p>
                      </li>
                    </ul>
                  </div>
                  <div className="soft-box">
                    { " " }
                    <ul>
                      <li>
                        <h5>Soft Cap</h5>
                        <p>500 SOL</p>
                      </li>
                      <li>
                        <h5>Hard Cap</h5>
                        <p>5000 SOL</p>
                      </li>
                    </ul>
                  </div>

                  <div className="rangeslider">
                    <div className="rangecount">
                      <div className="solrang">0/500 SOL</div>
                      <div className="progressrang">Progress: 0%</div>
                    </div>
                    <div className="rangebar"></div>
                  </div>

                  <div className="switch-chart">
                    <div className="switch-and-amount-box">
                      { " " }
                      <div className="switch-box-outer">
                        { " " }
                        <div className="switch-boxpand">
                          {/* developer*/ }
                          <select
                            className="dropdon"
                            onChange={ ( e ) => {
                              handleOptionChange( e );
                            } }
                          >
                            <option value="switch-token">Switch Token</option>

                            <option value="choose-network">
                              Choose network
                            </option>
                          </select>
                          { options === "switch-token" ? (
                            <>
                              {/* Switch token html start*/ }
                              <ul className="Switchlogo">
                                <li className="active">
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ selectedCoin?.logo } alt="Icon" />
                                  </span>
                                  <span>{ selectedCoin?.name }</span>
                                </li>
                              </ul>
                              <ul className="switchlogoitem">
                                {
                                  switchCoinData?.map( ( item, i ) => {
                                    return (
                                      <li
                                        onClick={ () => {
                                          handleCoin( item );
                                        } }
                                      >
                                        <span className="iconsw">
                                          { " " }
                                          <img src={ item?.logo } alt="Icon" />
                                        </span>
                                        <span>{ item?.name }</span>
                                      </li>
                                    )
                                  } )
                                }

                                {/* <li
                                  onClick={ () => {
                                    handleCoin( "USDC" );
                                  } }
                                >
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Usdclogo } alt="Icon" />
                                  </span>
                                  <span>USDC</span>
                                </li>
                                <li className="active">
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Usdtlogo } alt="Icon" />
                                  </span>
                                  <span>USDT</span>
                                </li>
                                <li>
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Ethlogo } alt="Icon" />
                                  </span>
                                  <span>ETH</span>
                                </li>
                                <li>
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Bnblogo } alt="Icon" />
                                  </span>
                                  <span>BNB</span>
                                </li>
                                <li>
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Sollogo } alt="Icon" />
                                  </span>
                                  <span>SOL</span>
                                </li>
                                <li>
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Arbogo } alt="Icon" />
                                  </span>
                                  <span>ARB</span>
                                </li>
                                <li>
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Maticlogo } alt="Icon" />
                                  </span>
                                  <span>MATIC</span>
                                </li> */}
                              </ul>
                              {/* Switch token html start*/ }
                            </>
                          ) : (
                            <>
                              <ul className="Switchlogo">
                                <li className="active">
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ selectedCoin?.logo } alt="Icon" />
                                  </span>
                                  <span>{ selectedCoin?.name }</span>
                                </li>
                              </ul>
                              <ul className="switchlogoitem">
                                {
                                  networkCoinData?.map( ( item, i ) => {
                                    return (
                                      <li
                                        onClick={ () => {
                                          handleCoin( item );
                                        } }
                                      >
                                        <span className="iconsw">
                                          { " " }
                                          <img src={ item?.logo } alt="Icon" />
                                        </span>
                                        <span>{ item?.name }</span>
                                      </li>
                                    )
                                  } )
                                }
                                {/* <li
                                  onClick={ () => {
                                    handleCoin( "BSC" );
                                  } }
                                >
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Usdclogo } alt="Icon" />
                                  </span>
                                  <span>BSC</span>
                                </li>
                                <li className="active">
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Usdtlogo } alt="Icon" />
                                  </span>
                                  <span>USDT</span>
                                </li>
                                <li>
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Ethlogo } alt="Icon" />
                                  </span>
                                  <span>ETH</span>
                                </li>
                                <li>
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Bnblogo } alt="Icon" />
                                  </span>
                                  <span>BNB</span>
                                </li>
                                <li
                                  onClick={ () => {
                                    handleCoin( "SQL" );
                                  } }
                                >
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Sollogo } alt="Icon" />
                                  </span>
                                  <span>SOL</span>
                                </li>
                                <li>
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Arbogo } alt="Icon" />
                                  </span>
                                  <span>ARB</span>
                                </li>
                                <li>
                                  <span className="iconsw">
                                    { " " }
                                    <img src={ Maticlogo } alt="Icon" />
                                  </span>
                                  <span>MATIC</span>
                                </li> */}
                              </ul>
                            </>
                          ) }
                        </div>
                      </div>
                      <div className="amount-box-outer">
                        <div className="switch-boxpand">
                          <h3>Amount</h3>
                          <p>
                            Amount <span>(max: 20 SOL)</span>
                          </p>
                          <div className="amount-max">
                            <input name="myInput" defaultValue="0.0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="buybtn-chart">
                    <div className="buy-and-claim-btn">
                      { " " }
                      <div className="buy-btn-outer">
                        { " " }
                        <Link to={ "/#" } target="_blank" className="buy-btn">
                          Buy $TIGA
                        </Link>
                      </div>
                      <div className="claim-btn-outer">
                        <Link to={ "/#" } target="_blank" className="claim-btn">
                          Claim Tokens
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abouts-section">
        <div className="container_rows">
          <div className="abouts-section-outer">
            <div className="abouts-left">
              { " " }
              <h2>About tiga</h2>
              <p>
                Welcome to the world of Tiga, where every token tells a story,
                every meme contains a message, and every game is a chance to win
                big. This is where legends are made and fortunes are discovered.
                We are harnessing the potential of our meme token, giving it
                utility in our crypto-native casino. It combines gaming and
                betting in a way that is accessible to everyone. This is how we
                define the future of Gamble Fi.
              </p>
              <p>
                By standing at the top of the meme coin podium, $TIGA is doing
                more than just following the wave of hype. It is setting a new
                standard, extending the saga of memes into utility, creating a
                future where value grows from real, breakthrough profits.
              </p>
              <p>
                Tiga is a world where the excitement of iGaming collides with
                the wild world of memes. Born from the merger of veterans and
                meme masters, TIGA is not just a cryptocurrency; it's a
                revolution.
              </p>
              <p>Get ready to make history.</p>
            </div>
            <div className="abouts-right">
              { " " }
              <img src={ Bitmap } alt="Icon" />
            </div>
          </div>
        </div>
      </section>
      <section className="gameply-section">
        <div className="container_rows">
          <div className="gameply-heding">
            { " " }
            <h3>GAMEPLAY</h3>
            <h2>PLAY IT YOUR WAY</h2>
          </div>
          <div className="gameply-section-outer">
            <div className="gameply-section-item">
              <div className="gameply-left">
                <img src={ HQbepixelart } alt="Icon" />
                <button onClick={ openModal }>Open Modal</button>
              </div>
              <div className="gameply-right">
                <img src={ HQ3Dactioshots } alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whostiga-section">
        <div className="container_rows">
          <div className="whostiga-heding">
            { " " }
            <h2>who's TIGA</h2>
            <p>
              Our token is not just another digital dime it's the heartbeat of
              our game. By staking or rolling it in the electrifying world of
              Tiga.game, you're not just playing; you're powering up the
              economy. Every move you make tightens the ranks of circulating
              tokens, fueling a frenzy of activity that's all about going fast
              and furious toward growth.
            </p>
          </div>
          <div className="whostiga-section-outer">
            <div className="whostiga-section-item">
              <div className="whostiga-left">
                { " " }
                <h3>UTILITIES:</h3>
                <div className="Buybackicon">Buy Back with Profit and Burn</div>
                <div className="Realyieldicon">
                  Real yield, airdropping part of the profits to stakers
                </div>
                <div className="Realyieldicon">
                  Staking Rewards: Higher Cashback, Free Bets and Other Benefits
                </div>
                <div className="Cashbackicon">
                  Additional Cashback when Used as Gaming Currency
                </div>
                <div className="Cashbackicon">
                  Currency for Bonus and Interest Payouts
                </div>
              </div>
              <div className="whostiga-right">
                { " " }
                <img src={ WhosTIGA } alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tokenomics-section">
        <div className="container_rows">
          <div className="tokenomics-section-outer">
            <h2>Tokenomics</h2>
            <div className="tokenomics-section-item">
              <div className="atokenomics-left">
                { " " }
                <h3>Token supply</h3>
                <h4>420,690,000,000,000</h4>
                <div className="taxes-box">
                  <p>No Taxes, No Bullshit. It's that simple</p>
                  <p>
                    LP tokens are burnt, and contract ownership is renounced.
                  </p>
                </div>
              </div>
              <div className="tokenomics-right">
                { " " }
                <img src={ TigaPitch3 } alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="roadmap-section">
        <div className="roadmap-section-outer">
          { " " }
          <h2>Roadmap</h2>{ " " }
          <div className="roadmap-timelines">
            <div className="roadmap-section-item">
              { " " }
              <div className="container_rows">
                <div className="roadmap-outer">
                  { " " }
                  <div className="card-outer  card-one">
                    <div className="card">
                      <div className="card-inner">
                        <div className="info">
                          <h3 className="title">Phase 1</h3>
                          <ul>
                            <li>Release White Paper </li>
                            <li>Launch ICO Site </li>
                            <li>Setup Partner Network </li>
                            <li>Start Community Building </li>
                            <li>Launch the Tiga.Game Casino</li>
                          </ul>
                        </div>
                      </div>
                    </div>{ " " }
                  </div>
                  <div className="card-outer  card-two">
                    <div className="card">
                      <div className="card-inner">
                        <div className="info">
                          <h3 className="title">Phase 2</h3>
                          <ul>
                            <li>Complete the ICO </li>
                            <li>TIGA Token Creation </li>
                            <li>Launch TIGA Staking Contract </li>
                            <li>Listing on DEX and CEX </li>
                            <li>Setup AI-marketing and Analytics </li>
                            <li>
                              Launch Affiliate Program and Player Referrals{ " " }
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{ " " }
                  </div>
                  <div className="card-outer card-three">
                    <div className="card">
                      <div className="card-inner  ">
                        <div className="info">
                          <h3 className="title">Phase 3</h3>
                          <ul>
                            <li>Community Campaigns </li>
                            <li>Collaborations with NFT Projects </li>
                            <li>Add Localization for Additional Languages </li>
                            <li>Release Shared Betting Pools Feature </li>
                            <li>Launch Crypto Futures Betting </li>
                            <li>Commence </li>
                          </ul>
                        </div>
                      </div>
                    </div>{ " " }
                  </div>
                  <div className="card-outer  card-four">
                    <div className="card">
                      <div className="card-inner">
                        <div className="info">
                          <h3 className="title">Phase 4</h3>
                          <ul>
                            <li>Commence Token Burns </li>
                            <li>Commence Profit Distribution to Stakers </li>
                            <li>
                              Launch DeFi Vault for Staking of Other Tokens than
                              TIGA{ " " }
                            </li>
                            <li>Provide TIGA in ERC20 Chain </li>
                            <li>Release First InHouse Game</li>
                          </ul>
                        </div>
                      </div>
                    </div>{ " " }
                  </div>{ " " }
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="competitive-outer">
        <div className="container_rows">
          <div className="competitive-heding">
            { " " }
            <h2>Competitive Landscape</h2>
          </div>
          <div className="competitive-list">
            <div className="list-item-bx">
              <div className="list-item-inner">
                <div className="item-contenty">
                  <div className="runner-item-box">
                    { " " }
                    <Link to={ "/#" } target="_blank" className="runner-btn">
                      Runner Up
                    </Link>
                    <div className="runner-btn-icon">
                      <img src={ Solanasollogo } alt="Icon" />
                    </div>
                    <h2>Solana</h2>
                    <h3>$SOL</h3>
                    <Link to={ "/#" } target="_blank" className="choise-btn">
                      Good Choice
                    </Link>
                  </div>
                  <div className="metavr-text">
                    <ul>
                      <li>4272 transactions/second</li>
                      <li>240+ billion transactions</li>
                      <li>Chain used for $WIF</li>
                      <li className="notarrow">Not a dog</li>
                      <li className="notarrow">No hat</li>
                    </ul>
                  </div>
                  <div className="cxplore-btn">
                    <Link to={ "/#" } target="_blank" className="exp-btn">
                      BUY SWIF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item-bx">
              <div className="list-item-inner">
                <div className="item-contenty">
                  <div className="runner-item-box">
                    { " " }
                    <Link to={ "/#" } target="_blank" className="runner-btn">
                      Winner
                    </Link>
                    <div className="runner-btn-icon">
                      <img src={ Dogwifhat } alt="Icon" />
                    </div>
                    <h2>Dog wif hat</h2>
                    <h3>$wif</h3>
                    <Link to={ "/#" } target="_blank" className="choise-btn">
                      Best of the best
                    </Link>
                  </div>
                  <div className="metavr-text">
                    <ul>
                      <li>
                        WIF isn't just a cryptocurrency: It's a symbol of
                        progress, for futuristic transactions, a beacon for
                        those who think ahead it's clear that the future belongs
                        to those who embrace innovations like WIF. transcending
                        boundaries & paving a new era in finance and technology.
                      </li>
                      <li>literally a dog wit a hat</li>
                    </ul>
                  </div>
                  <div className="cxplore-btn">
                    <Link to={ "/#" } target="_blank" className="exp-btn">
                      BUY SWIF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item-bx">
              <div className="list-item-inner">
                <div className="item-contenty">
                  <div className="runner-item-box">
                    { " " }
                    <Link to={ "/#" } target="_blank" className="runner-btn">
                      Third choice
                    </Link>
                    <div className="runner-btn-icon">
                      <img src={ Ethereum } alt="Icon" />
                    </div>
                    <h2>Ethereum</h2>
                    <h3>$ETh</h3>
                    <Link to={ "/#" } target="_blank" className="choise-btn">
                      ???
                    </Link>
                  </div>
                  <div className="metavr-text">
                    <ul>
                      <li className="notarrow">12 transactions/second</li>
                      <li className="notarrow">21+ billon transactions</li>
                      <li className="notarrow">Chain not used for SWIF</li>
                      <li className="notarrow">Not a dog</li>

                      <li className="notarrow">No hat</li>
                    </ul>
                  </div>
                  <div className="cxplore-btn">
                    <Link to={ "/#" } target="_blank" className="exp-btn">
                      BUY SWIF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-section">
        <div className="container_rows">
          <div className="Pprtners-section-outer">
            <h2>Partners</h2>
            <div className="partners-section-item">
              <ul>
                <li>
                  <img src={ Partners1 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners2 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners3 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners4 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners5 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners6 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners7 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners8 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners9 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners10 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners11 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners12 } alt="Icon" />
                </li>
                <li>
                  <img src={ Partners13 } alt="Icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container_rows">
          <div className="faq-section-outer">
            <h2>FAQs</h2>
            <div className="faq-section-item">
              { " " }
              <Faq data={ data } styles={ styles } config={ config } />
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={ modalIsOpen }
        onAfterOpen={ afterOpenModal }
        onRequestClose={ closeModal }
        style={ customStyles }
        contentLabel="Example Modal"
      >
        <div className="ifpr" ref={ ( _subtitle ) => ( subtitle = _subtitle ) }>
          <button onClick={ closeModal }>close</button>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/GyO1MtLhyt0?si=6MHkz0haIIf2pQhU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};
