import { Link } from "react-router-dom";
import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import CardItem2 from "../../components/staticPages/cards/cardItem2";
import {
  avatar,
  avatar14,
  avatar3,
  avatar4,
  avatar5,
  featureItem1,
  productLarge1,
} from "../../img";

const ProductPageV2 = () => {
  return (
    <>
      <Header />
      <SubHeader />

      <div>
        <div class="product-page product-version-2">
          <div class="product-media">
            <div class="product-img">
              <Link
                class="expand-icon"
                data-fslightbox="lightbox"
                to="img/content/product-img/product-1-large.png"
              >
                <svg class="crumina-icon">
                  <use xlinkHref="#maximize-icon"></use>
                </svg>
              </Link>
              <img src={productLarge1} width="1742" height="980" alt="" />
            </div>
          </div>
          <div class="product-info">
            <div class="product-info-wrapper">
              <div class="page-title-section">
                <h1>Breathing Nature</h1>
              </div>
              <div class="product-author avatar-block">
                <div class="avatar box-42">
                  <img src={avatar} alt="avatar" />
                  <span class="verified">
                    <svg class="crumina-icon">
                      <use xlinkHref="#check-icon"></use>
                    </svg>
                  </span>
                </div>
                <div class="avatar-meta">
                  <div class="avatar-title">
                    <span class="gradient-text">Dexter Stark</span>
                  </div>
                  <div class="avatar-meta">@DexterStark</div>
                </div>
              </div>
              <div class="product-meta-section">
                <div class="product-meta-item">
                  <div class="label">Current bid</div>
                  <div class="value">2.31 ETH</div>
                  <div class="caption">125.230 U$D</div>
                </div>
                <div class="product-meta-item">
                  <div class="label">Edition</div>
                  <div class="value">01/40</div>
                  <div class="caption">Tokens</div>
                </div>
                <div class="product-meta-item">
                  <div class="label">AUCTION ENDING IN</div>
                  <div class="countdown">
                    <div
                      class="js-countdown"
                      data-timer="104400"
                      data-labels="Days , Hours , Mins , Secs"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="place-bid">
                <button class="btn btn-wide btn-dark">Place a Bid!</button>
              </div>
              <div class="bidding-section">
                <div class="product-fav-counter">
                  <svg class="crumina-icon">
                    <use xlinkHref="#heart-icon"></use>
                  </svg>
                  <span class="count">105</span>
                </div>
                <div class="more-link">
                  <Link to="#">
                    <svg class="crumina-icon">
                      <use xlinkHref="#dots-icon"></use>
                    </svg>
                  </Link>
                </div>
                <div class="social-share-box">
                  <div class="share-icons">
                    <Link to="#">
                      <svg class="crumina-icon">
                        <use xlinkHref="#link-icon"></use>
                      </svg>
                    </Link>
                    <Link to="#">
                      <svg class="crumina-icon">
                        <use xlinkHref="#facebook-icon"></use>
                      </svg>
                    </Link>
                    <Link to="#">
                      <svg class="crumina-icon">
                        <use xlinkHref="#twitter-icon"></use>
                      </svg>
                    </Link>
                    <Link to="">
                      <svg class="crumina-icon">
                        <use xlinkHref="#instagram-icon"></use>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="tabs-block swiper-container">
                <div class="swiper-nav">
                  <div class="swiper-button-next">
                    <svg class="crumina-icon next-button">
                      <use xlinkHref="#arrow-right2-icon"></use>
                    </svg>
                  </div>
                  <div class="swiper-button-prev">
                    <svg class="crumina-icon prev-button">
                      <use xlinkHref="#arrow-left2-icon"></use>
                    </svg>
                  </div>
                </div>

                <ul class="tabs-list swiper-wrapper">
                  <li class="swiper-slide">
                    <a href="#tab1">Bids</a>
                  </li>
                  <li class="swiper-slide active">
                    <a href="#tab2">Description</a>
                  </li>
                  <li class="swiper-slide">
                    <a href="#tab3">Additional Details</a>
                  </li>
                  <li class="swiper-slide">
                    <a href="#tab4">Activity</a>
                  </li>
                </ul>

                <div id="tab1" class="tab">
                  <div class="tab-content">
                    <div class="placed-bid">
                      <div class="bid-placer">
                        <div class="avatar box-42">
                          <img src={avatar3} alt="avatar" />
                        </div>
                        <div class="bid-info">
                          <div class="bid-title">
                            Bid placed by{" "}
                            <span class="gradient-text">Crimson Ray</span>
                          </div>
                          <div class="bid-date">03/25/2021 at 12:19pm</div>
                        </div>
                      </div>
                      <div class="bid-box">
                        <div class="crypto-value">2.31 ETH</div>
                        <div class="currency-value">125.230 U$D</div>
                      </div>
                    </div>
                    <div class="placed-bid">
                      <div class="bid-placer">
                        <div class="avatar box-42">
                          <img src={avatar4} alt="avatar" />
                        </div>
                        <div class="bid-info">
                          <div class="bid-title">
                            Bid placed by{" "}
                            <span class="gradient-text">Jenn Art</span>
                          </div>
                          <div class="bid-date">03/25/2021 at 12:19pm</div>
                        </div>
                      </div>
                      <div class="bid-box">
                        <div class="crypto-value">2.31 ETH</div>
                        <div class="currency-value">125.230 U$D</div>
                      </div>
                    </div>
                    <div class="placed-bid">
                      <div class="bid-placer">
                        <div class="avatar box-42">
                          <img src={avatar5} alt="avatar" />
                        </div>
                        <div class="bid-info">
                          <div class="bid-title">
                            Bid placed by{" "}
                            <span class="gradient-text">Derek Greyson</span>
                          </div>
                          <div class="bid-date">03/25/2021 at 12:19pm</div>
                        </div>
                      </div>
                      <div class="bid-box">
                        <div class="crypto-value">2.31 ETH</div>
                        <div class="currency-value">125.230 U$D</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab2" class="tab active">
                  <div class="tab-content">
                    <div class="product-description">
                      <p>
                        I am a self-taught digital artist who specializes in 3d
                        art and motion graphics. Most of my works are inspired
                        by nature and biomechanic themes.
                      </p>
                      <p>
                        What does it mean? Biomechanics is the study of the
                        structure, function and motion of the mechanical aspects
                        of biological systems, at any level from whole organisms
                        to organs, cells and cell organelles, using the methods
                        of mechanics. Biomechanics is a branch of biophysics.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="tab3" class="tab">
                  <div class="tab-content">
                    <div class="product-description">
                      <ul class="details-list">
                        <li>
                          <svg class="crumina-icon bullet-icon">
                            <use xlinkHref="#circle-icon"></use>
                          </svg>
                          <span class="detail-label">Size</span>
                          <span class="bold">5000 x 3500px (37MB)</span>
                        </li>
                        <li>
                          <svg class="crumina-icon bullet-icon">
                            <use xlinkHref="#circle-icon"></use>
                          </svg>
                          <span class="detail-label">Formats</span>
                          <span class="bold">MP4, JPEG and PNG</span>
                        </li>
                        <li>
                          <svg class="crumina-icon bullet-icon">
                            <use xlinkHref="#circle-icon"></use>
                          </svg>
                          <span class="detail-label">Contract Address</span>
                          <span class="bold">0xf7a6...f643</span>
                        </li>
                        <li>
                          <svg class="crumina-icon bullet-icon">
                            <use xlinkHref="#circle-icon"></use>
                          </svg>
                          <span class="detail-label">Token ID</span>
                          <span class="bold">3584</span>
                        </li>
                        <li>
                          <svg class="crumina-icon bullet-icon">
                            <use xlinkHref="#circle-icon"></use>
                          </svg>
                          <span class="detail-label">Token Standard</span>
                          <span class="bold">ERC-721</span>
                        </li>
                        <li>
                          <svg class="crumina-icon bullet-icon">
                            <use xlinkHref="#circle-icon"></use>
                          </svg>
                          <span class="detail-label">Blockchain</span>
                          <span class="bold">Ethereum</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="tab4" class="tab">
                  <div class="tab-content">
                    <div class="activity-item sale">
                      <div class="bid-placer">
                        <div class="avatar box-42">
                          <Link to="08-Profile-Page.html">
                            <img src={avatar} alt="avatar" />
                            <span class="verified">
                              <svg class="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                              </svg>
                            </span>
                          </Link>
                        </div>
                        <div class="bid-info">
                          <div class="bid-title">
                            <span class="gradient-text">
                              <Link to="08-Profile-Page.html">
                                Dexter Stark
                              </Link>
                            </span>{" "}
                            sold
                          </div>
                          <div class="bid-date">53 minutes ago</div>
                        </div>
                      </div>
                      <div class="bid-box">
                        <div class="crypto-value">2.31 ETH</div>
                        <div class="currency-value">125.230 U$D</div>
                      </div>
                    </div>

                    <div class="activity-item purchase">
                      <div class="bid-placer">
                        <div class="avatar box-42">
                          <Link to="08-Profile-Page.html">
                            <img src={avatar14} alt="avatar" />
                          </Link>
                        </div>
                        <div class="bid-info">
                          <div class="bid-title">
                            <span class="gradient-text">
                              <Link to="08-Profile-Page.html">
                                Derek Greyson
                              </Link>
                            </span>{" "}
                            purchased
                          </div>
                          <div class="bid-date">56 minutes ago</div>
                        </div>
                      </div>
                      <div class="bid-box">
                        <div class="crypto-value">2.31 ETH</div>
                        <div class="currency-value">125.230 U$D</div>
                      </div>
                    </div>

                    <div class="activity-item listing">
                      <div class="bid-placer">
                        <div class="avatar box-42">
                          <Link to="08-Profile-Page.html">
                            <img src="img/avatar-2.png" alt="avatar" />
                            <span class="verified">
                              <svg class="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                              </svg>
                            </span>
                          </Link>
                        </div>
                        <div class="bid-info">
                          <div class="bid-title">
                            <span class="gradient-text">
                              <Link to="08-Profile-Page.html">
                                Jackie Jones
                              </Link>
                            </span>{" "}
                            listed
                          </div>
                          <div class="bid-date">58 minutes ago</div>
                        </div>
                      </div>
                      <div class="bid-box">
                        <div class="crypto-value">2.31 ETH</div>
                        <div class="currency-value">125.230 U$D</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="related-section container">
            <div class="section-title-wrapper">
              <h3>Related Items</h3>
            </div>

            <div class="featured-box grid-6-columns">
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPageV2;
