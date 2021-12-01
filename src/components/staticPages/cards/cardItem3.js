import { Link } from "react-router-dom";

const CardItem3 = ({ img1, img2, bidReplaced,edition, creator, heading, currBid, img3 }) => {
    return (
        <div class="featured-item v3">
            <div class="featured-item-wrapper">
                <div class="featured-item-image-wrapper">
                    <div class="featured-item-image">
                        <Link href="/product-page"><img src={img1} alt="" /></Link>
                    </div>
                </div>
                <div class="featured-countdown"><span class="clock"><svg class="crumina-icon">
                    <use xlinkHref="#clock-icon"></use>
                </svg></span><span class="js-countdown" data-timer="66400" data-labels="d : , h : , m : , s"></span>
                </div>
                <div class="item-meta-wrapper">
                    <div class="title"><Link href="/product-page">{heading}</Link></div>
                    <div class="fav-counter"><svg class="crumina-icon">
                        <use xlinkHref="#heart-icon"></use>
                    </svg><span class="count">22</span></div>
                </div>

                <div class="item-meta-wrapper">
                    <div class="item-meta">
                        <div class="creator-box">
                            <div class="creator-info">
                                <div class="avatar box-26"><Link href="08-profile-page.html"><img src={img2}
                                    alt="" /></Link><span class="verified"><svg class="crumina-icon">
                                        <use xlinkHref="#check-icon"></use>
                                    </svg></span>
                                </div>
                                <div class="creator-meta">
                                    <div class="creator-label">CREATOR</div>
                                    <div class="creator-name"><Link href="08-profile-page.html">{creator}</Link></div>
                                </div>
                            </div>
                            <div class="featured-item-pricebox">
                                <div class="price-caption">EDITION </div>
                                <div class="price">{edition}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item-meta">
                    <div class="creator-box">
                        <div class="creator-info">
                            <div class="avatar box-26"><Link href="08-profile-page.html"><img src={img3}
                                alt="" /></Link><span class="verified"><svg class="crumina-icon">
                                    <use xlinkHref="#check-icon"></use>
                                </svg></span>
                            </div>
                            <div class="creator-meta">
                                <div class="creator-label">BID PLACED BY</div>
                                <div class="creator-name"><Link href="/product-page">{bidReplaced}</Link></div>
                            </div>
                        </div>

                        <div class="featured-item-pricebox">
                            <div class="price-caption">Current BID</div>
                            <div class="price">{currBid}</div>
                        </div>
                    </div>
                </div>
                <div class="featured-item-post-content">
                    <div class="social-share-box">
                        <div class="share-icons">
                            <Link href="#">
                                <svg class="crumina-icon">
                                    <use xlinkHref="#facebook-icon"></use>
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg class="crumina-icon">
                                    <use xlinkHref="#twitter-icon"></use>
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg class="crumina-icon">
                                    <use xlinkHref="#instagram-icon"></use>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardItem3;