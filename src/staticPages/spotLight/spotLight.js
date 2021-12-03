import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import CollectionItemCard from "../../components/staticPages/cards/collectionItemCard";
import { artwork1, artwork2, artwork3, artwork4, artwork5, artwork6, artwork7, avatar2, avatar3 } from "../../img";

const SpotLight = () => {
    return (
        <>
            <Header />
            <SubHeader />

            <div class="primary-content-area container content-padding">
                <div class="section-padding overflow-hidden">
                    <div class="artworks-carousel">
                        <div class="section-title-wrapper">
                            <div class="section-title"><span class="gradient-text">Artworks</span> of the Week</div>
                            <div class="title-navigation">
                                <div class="featured-carousel-icon swiper-button-prev"><svg class="crumina-icon">
                                    <use xlinkHref="#arrow-left2-icon"></use>
                                </svg></div>
                                <div class="featured-carousel-icon swiper-button-next"><svg class="crumina-icon">
                                    <use xlinkHref="#arrow-right2-icon"></use>
                                </svg></div>
                            </div>
                        </div>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="artwork-item">
                                    <div class="artwork-media">
                                        <a href="/product-page-v3"><img src={artwork1}
                                            alt="" /></a>
                                    </div>
                                    <div class="artwork-details">
                                        <h3 class="artwork-title">Social Blockz</h3>
                                        <div class="avatar-block">
                                            <div class="avatar box-42">
                                                <a href="/profile-page">
                                                    <img src={avatar2} alt="avatar" /><span class="verified"><svg
                                                        class="crumina-icon">
                                                        <use xlinkHref="#check-icon"></use>
                                                    </svg></span></a>
                                            </div>
                                            <div class="avatar-meta">
                                                <div class="avatar-title gradient-text"><a
                                                    href="/profile-page">Jackie Jones</a></div>
                                                <div class="avatar-meta">@JackieJ</div>
                                            </div>
                                        </div>
                                        <div class="product-meta-section">
                                            <div class="product-meta-item">
                                                <div class="label">Current bid</div>
                                                <div class="value">2.31 ETH</div>
                                                <div class="caption">125.230 U$D</div>
                                            </div>
                                            <div class="product-meta-item">
                                                <div class="label">AUCTION ENDING IN</div>
                                                <div class="countdown">
                                                    <div class="js-countdown" data-timer="104400"
                                                        data-labels="Days , Hours , Mins , Secs"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-description">
                                            <p>Social Blockz was made in a sleek and modern 3D style with a wide range of
                                                elements and techniques that show what can be achieved with the newest
                                                technologies...</p>
                                        </div>
                                        <div class="bidding-section">
                                            <div class="place-bid"><button class="btn btn-wide btn-dark">Place a
                                                Bid!</button></div>
                                            <div class="product-fav-counter gradient-background"><svg class="crumina-icon">
                                                <use xlinkHref="#heart-icon"></use>
                                            </svg><span class="count">105</span>
                                            </div>
                                            <div class="more-link"><a href="#">
                                                <svg class="crumina-icon">
                                                    <use xlinkHref="#dots-icon"></use>
                                                </svg>
                                            </a>
                                            </div>
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
                                                    <a href="#"><svg class="crumina-icon">
                                                        <use xlinkHref="#twitter-icon"></use>
                                                    </svg>
                                                    </a>
                                                    <a href=""><svg class="crumina-icon">
                                                        <use xlinkHref="#instagram-icon"></use>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="artwork-item">
                                    <div class="artwork-media">
                                        <a href="/product-page-v3"><img src={artwork6}
                                            alt="" /></a>
                                    </div>
                                    <div class="artwork-details">
                                        <h3 class="artwork-title">Canary’s Kitchen</h3>
                                        <div class="avatar-block">
                                            <div class="avatar box-42">
                                                <a href="/profile-page">
                                                    <img src={avatar3} alt="avatar" /><span class="verified"><svg
                                                        class="crumina-icon">
                                                        <use xlinkHref="#check-icon"></use>
                                                    </svg></span></a>
                                            </div>
                                            <div class="avatar-meta">
                                                <div class="avatar-title gradient-text"><a href="/profile-page">The
                                                    Green Goo</a></div>
                                                <div class="avatar-meta">@daGreenGoo</div>
                                            </div>
                                        </div>
                                        <div class="product-meta-section">
                                            <div class="product-meta-item">
                                                <div class="label">Current bid</div>
                                                <div class="value">3.47 ETH</div>
                                                <div class="caption">134.250 U$D</div>
                                            </div>
                                            <div class="product-meta-item">
                                                <div class="label">AUCTION ENDING IN</div>
                                                <div class="countdown">
                                                    <div class="js-countdown" data-timer="104400"
                                                        data-labels="Days , Hours , Mins , Secs"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-description">
                                            <p>Canary’s Kitchen was made in a sleek and modern 3D style with a wide range of
                                                elements and techniques that show what can be achieved with the newest
                                                technologies...</p>
                                        </div>
                                        <div class="bidding-section">
                                            <div class="place-bid"><button class="btn btn-wide btn-dark">Place a
                                                Bid!</button></div>
                                            <div class="product-fav-counter gradient-background"><svg class="crumina-icon">
                                                <use xlinkHref="#heart-icon"></use>
                                            </svg><span class="count">95</span>
                                            </div>
                                            <div class="more-link"><a href="#">
                                                <svg class="crumina-icon">
                                                    <use xlinkHref="#dots-icon"></use>
                                                </svg>
                                            </a>
                                            </div>
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
                                                    <a href="#"><svg class="crumina-icon">
                                                        <use xlinkHref="#twitter-icon"></use>
                                                    </svg>
                                                    </a>
                                                    <a href=""><svg class="crumina-icon">
                                                        <use xlinkHref="#instagram-icon"></use>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="artwork-item">
                                    <div class="artwork-media">
                                        <a href="/product-page-v3"><img src={artwork7}
                                            alt="" /></a>
                                    </div>
                                    <div class="artwork-details">
                                        <h3 class="artwork-title">Crimson Planks</h3>
                                        <div class="avatar-block">
                                            <div class="avatar box-42">
                                                <a href="/profile-page">
                                                    <img src={avatar3} alt="avatar" /><span class="verified"><svg
                                                        class="crumina-icon">
                                                        <use xlinkHref="#check-icon"></use>
                                                    </svg></span></a>
                                            </div>
                                            <div class="avatar-meta">
                                                <div class="avatar-title gradient-text"><a href="/profile-page">The
                                                    Green Goo</a></div>
                                                <div class="avatar-meta">@daGreenGoo</div>
                                            </div>
                                        </div>
                                        <div class="product-meta-section">
                                            <div class="product-meta-item">
                                                <div class="label">Current bid</div>
                                                <div class="value">3.47 ETH</div>
                                                <div class="caption">134.250 U$D</div>
                                            </div>
                                            <div class="product-meta-item">
                                                <div class="label">AUCTION ENDING IN</div>
                                                <div class="countdown">
                                                    <div class="js-countdown" data-timer="104400"
                                                        data-labels="Days , Hours , Mins , Secs"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-description">
                                            <p>Crimson Planks was made in a sleek and modern 3D style with a wide range of
                                                elements and techniques that show what can be achieved with the newest
                                                technologies...</p>
                                        </div>
                                        <div class="bidding-section">
                                            <div class="place-bid"><button class="btn btn-wide btn-dark">Place a
                                                Bid!</button></div>
                                            <div class="product-fav-counter gradient-background"><svg class="crumina-icon">
                                                <use xlinkHref="#heart-icon"></use>
                                            </svg><span class="count">112</span>
                                            </div>
                                            <div class="more-link"><a href="#">
                                                <svg class="crumina-icon">
                                                    <use xlinkHref="#dots-icon"></use>
                                                </svg>
                                            </a>
                                            </div>
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
                                                    <a href="#"><svg class="crumina-icon">
                                                        <use xlinkHref="#twitter-icon"></use>
                                                    </svg>
                                                    </a>
                                                    <a href=""><svg class="crumina-icon">
                                                        <use xlinkHref="#instagram-icon"></use>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-padding overflow-hidden">
                    <div class="collections-carousel">
                        <div class="section-title-wrapper">
                            <div class="section-title"><span class="gradient-text">Curated</span> Collections</div>
                            <div class="title-navigation">
                                <div class="featured-carousel-icon swiper-button-prev"><svg class="crumina-icon">
                                    <use xlinkHref="#arrow-left2-icon"></use>
                                </svg></div>
                                <div class="featured-carousel-icon swiper-button-next"><svg class="crumina-icon">
                                    <use xlinkHref="#arrow-right2-icon"></use>
                                </svg></div>
                            </div>
                        </div>
                        <div class="featured-carousel">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <CollectionItemCard img={artwork2} itemName="Pop Culture" itemCounts="364" />
                                </div>
                                <div class="swiper-slide">
                                    <CollectionItemCard img={artwork3} itemName="Motion Graphics" itemCounts="590" />
                                </div>
                                <div class="swiper-slide">
                                    <CollectionItemCard img={artwork4} itemName="Illustrations" itemCounts="364" />
                                </div>
                                <div class="swiper-slide">
                                    <CollectionItemCard img={artwork5} itemName="3D Art" itemCounts="590" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default SpotLight;