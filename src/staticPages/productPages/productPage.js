import { Link } from "react-router-dom";
import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import ActivityCard from "../../components/staticPages/cards/activityCard";
import BidCard from "../../components/staticPages/cards/bidsCard";
import CardItem2 from "../../components/staticPages/cards/cardItem2";
import AdditionalDetails from "../../components/staticPages/product/additionalDetails";
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
                                    <Link to="/profile-page">
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
                                            <Link to="/profile-page">Dexter Stark</Link>
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
                                        <BidCard img1={avatar3} bidPlacedBy="Crimson Ray" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
                                        <BidCard img1={avatar4} bidPlacedBy="Jenn Art" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
                                        <BidCard img1={avatar5} bidPlacedBy="Derek Greyson" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
                                    </div>
                                </div>

                                <div id="tab2" class="tab">
                                    <div class="tab-content">
                                        <AdditionalDetails />
                                    </div>
                                </div>

                                <div id="tab3" class="tab">
                                    <div class="tab-content">
                                        <ActivityCard img1={avatar} tag="sale" username="Dexter Stark" time="53 minutes ago" eth="2.31 ETH" amount="125.230 U$D" />
                                        <ActivityCard img1={avatar} tag="purchase" username="Derek Greyson" time="53 minutes ago" eth="2.31 ETH" amount="125.230 U$D" />
                                        <ActivityCard img1={avatar2} tag="listing" username="Jackie Jones" time="53 minutes ago" eth="2.31 ETH" amount="125.230 U$D" />
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
