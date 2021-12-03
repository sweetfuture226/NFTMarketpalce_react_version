import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import ActivityCard from "../../components/staticPages/cards/activityCard";
import BidCard from "../../components/staticPages/cards/bidsCard";
import {
  avatar,
  avatar3,
  avatar4,
  avatar5,
  featureItem1,
  product2,
} from "../../img";
import CardItem from "./../../components/staticPages/cards/cardItem";

const ProductPageV3 = () => {
  return (
    <>
      <Header />
      <SubHeader />

      <div class="primary-content-area container content-padding">
        <div class="product-page product-version-3">
          <div class="page-title-section">
            <div class="social-share-box">
              <div class="share-icons">
                <a href="#">
                  <svg class="crumina-icon">
                    <use xlinkHref="#link-icon"></use>
                  </svg>
                </a>
                <a href="#">
                  <svg class="crumina-icon">
                    <use xlinkHref="#facebook-icon"></use>
                  </svg>
                </a>
                <a href="#">
                  <svg class="crumina-icon">
                    <use xlinkHref="#twitter-icon"></use>
                  </svg>
                </a>
                <a href="">
                  <svg class="crumina-icon">
                    <use xlinkHref="#instagram-icon"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="product-title">
              <h1>The Kobra Kings</h1>
            </div>
            <div class="favourite-section">
              <div class="product-fav-counter">
                <svg class="crumina-icon">
                  <use xlinkHref="#heart-icon"></use>
                </svg>
                <span class="count">105</span>
              </div>
              <div class="more-link">
                <a href="#">
                  <svg class="crumina-icon">
                    <use xlinkHref="#dots-icon"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="product-main-info">
            <div class="product-info">
              <div class="small-title">Creator</div>
              <div class="product-author avatar-block">
                <div class="avatar box-42">
                  <a href="/profile-page">
                    <img src={avatar} alt="avatar" />
                  </a>
                  <span class="verified">
                    <svg class="crumina-icon">
                      <use xlinkHref="#check-icon"></use>
                    </svg>
                  </span>
                </div>
                <div class="avatar-meta">
                  <div class="avatar-title">
                    <span class="gradient-text">
                      <a href="/profile-page">Dexter Stark</a>
                    </span>
                  </div>
                  <div class="avatar-meta">@DexterStark</div>
                </div>
              </div>
              <div class="product-description">
                <div class="small-title">Description</div>
                <p>
                  I am a self-taught digital artist who specializes in 3d art
                  and motion graphics. Most of my works are inspired by nature
                  and biomechanic themes.
                </p>
                <p>
                  What does it mean? Biomechanics is the study of the structure,
                  function and motion of the mechanical aspects of biological
                  systems, at any level from whole organisms to organs, cells
                  and cell organelles, using the methods of mechanics.
                  Biomechanics is a branch of biophysics.
                </p>
              </div>
              <div class="product-description">
                <div class="small-title">Additional Details</div>
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
                </ul>
              </div>
            </div>
            <div class="product-media">
              <a
                class="expand-icon"
                data-fslightbox="gallery"
                href="img/content/product-img/product-2.jpg"
              >
                <svg class="crumina-icon">
                  <use xlinkHref="#maximize-icon"></use>
                </svg>
              </a>
              <div class="product-img">
                <img src={product2} alt="" />
              </div>
            </div>
            <div class="product-meta-section">
              <div class="product-meta-item">
                <div class="small-title">Current bid</div>
                <div class="value">2.31 ETH</div>
                <div class="caption">125.230 U$D</div>
              </div>
              <div class="product-meta-item">
                <div class="small-title">Edition</div>
                <div class="value">01/40</div>
                <div class="caption">Tokens</div>
              </div>
              <div class="product-meta-item">
                <div class="small-title">Auction ending in</div>
                <div class="countdown">
                  <div
                    class="js-countdown"
                    data-timer="104400"
                    data-labels="Days , Hours , Mins , Secs"
                  ></div>
                </div>
              </div>
              <div class="place-bid">
                <button class="btn btn-wide btn-dark">Place a Bid!</button>
              </div>
            </div>
          </div>

          <div class="bids-listing-section">
            <div class="bids-list">
              <div class="small-title">Bids</div>
              <BidCard img1={avatar3} bidPlacedBy="Crimson Ray" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
              <BidCard img1={avatar4} bidPlacedBy="Jenn Art" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
              <BidCard img1={avatar5} bidPlacedBy="Derek Greyson" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
            </div>
            <div class="bids-list">
              <div class="small-title">Activity</div>

              <BidCard img1={avatar3} bidPlacedBy="Crimson Ray" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
              <BidCard img1={avatar4} bidPlacedBy="Jenn Art" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
              <BidCard img1={avatar5} bidPlacedBy="Derek Greyson" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
             
              <ActivityCard img1={avatar} username="Jackie Jones" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
            </div>
          </div>

          <div class="related-section container">
            <div class="section-title-wrapper">
              <h3>Related Items</h3>
            </div>

            <div class="featured-box grid-4-columns">
              <CardItem
                count="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                subHeading="@DexterStark"
                currBid="4.07 ETH"
              />
              <CardItem
                count="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                subHeading="@DexterStark"
                currBid="4.07 ETH"
              />
              <CardItem
                count="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                subHeading="@DexterStark"
                currBid="4.07 ETH"
              />
              <CardItem
                count="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                subHeading="@DexterStark"
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

export default ProductPageV3;
