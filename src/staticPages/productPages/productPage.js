import { Link } from "react-router-dom";
import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import CardItem2 from "../../components/staticPages/cards/cardItem2";
import {
    avatar,
    avatar14,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    featureItem1,
    product2,
} from "../../img";

const ProductPage = () => {
    return (
        <>
            <Header />
            <SubHeader />

            <div>
                <div class="product-page product-version-1">
                    <div class="product-media">
                        <Link
                            class="expand-icon"
                            data-fslightbox
                            to="img/content/product-img/product-2.jpg"
                        >
                            <svg class="crumina-icon">
                                <use xlinkHref="#maximize-icon"></use>
                            </svg>
                        </Link>
                        <div class="product-img">
                            <img src={product2} alt="" />
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-info-wrapper">
                            <div class="page-title-section">
                                <h1>Breathing Nature</h1>
                            </div>
                            <div class="avatar-block">
                                <div class="avatar box-42">
                                    <Link to="08-profile-page.html">
                                        <img src={avatar} alt="avatar" />
                                    </Link>
                                    <span class="verified">
                                        <svg class="crumina-icon">
                                            <use xlinkHref="#check-icon"></use>
                                        </svg>
                                    </span>
                                </div>
                                <div class="avatar-meta">
                                    <div class="avatar-title">
                                        <span class="gradient-text">
                                            <Link to="08-profile-page.html">Dexter Stark</Link>
                                        </span>
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
                            <div class="bidding-section">
                                <div class="place-bid">
                                    <button class="btn btn-wide btn-dark">Place a Bid!</button>
                                </div>
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
                            <div class="tabs-block">
                                <ul class="tabs-list">
                                    <li class="active">
                                        <a href="#tab1">Bids</a>
                                    </li>
                                    <li>
                                        <a href="#tab2">Additional Details</a>
                                    </li>
                                    <li>
                                        <a href="#tab3">Activity</a>
                                    </li>
                                </ul>

                                <div id="tab1" class="tab active">
                                    <div class="tab-content">
                                        <div class="placed-bid">
                                            <div class="bid-placer">
                                                <div class="avatar box-42">
                                                    <Link to="08-profile-page.html">
                                                        <img src={avatar3} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div class="bid-info">
                                                    <div class="bid-title">
                                                        Bid placed by{" "}
                                                        <span class="gradient-text">
                                                            <Link to="08-profile-page.html">Crimson Ray</Link>
                                                        </span>
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
                                                    <Link to="08-profile-page.html">
                                                        <img src={avatar4} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div class="bid-info">
                                                    <div class="bid-title">
                                                        Bid placed by{" "}
                                                        <span class="gradient-text">
                                                            <Link to="08-profile-page.html">Jenn Art</Link>
                                                        </span>
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
                                                    <Link to="08-profile-page.html">
                                                        <img src={avatar5} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div class="bid-info">
                                                    <div class="bid-title">
                                                        Bid placed by{" "}
                                                        <span class="gradient-text">
                                                            <Link to="08-profile-page.html">Derek Greyson</Link>
                                                        </span>
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

                                <div id="tab2" class="tab">
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

                                <div id="tab3" class="tab">
                                    <div class="tab-content">
                                        <div class="activity-item sale">
                                            <div class="bid-placer">
                                                <div class="avatar box-42">
                                                    <Link to="08-profile-page.html">
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
                                                            <Link to="08-profile-page.html">Dexter Stark</Link>
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
                                                    <Link to="08-profile-page.html">
                                                        <img src={avatar14} alt="avatar" />
                                                    </Link>
                                                </div>
                                                <div class="bid-info">
                                                    <div class="bid-title">
                                                        <span class="gradient-text">
                                                            <Link to="08-profile-page.html">Derek Greyson</Link>
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
                                                    <Link to="08-profile-page.html">
                                                        <img src={avatar2} alt="avatar" />
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
                                                            <Link to="08-profile-page.html">Jackie Jones</Link>
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

                            <div class="related-section">
                                <div class="section-title-wrapper">
                                    <h3>Related Items</h3>
                                </div>
                                <div class="featured-box">
                                    <CardItem2 likes="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                                    <CardItem2 likes="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                                    <CardItem2 likes="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" currBid="4.07 ETH" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductPage;
