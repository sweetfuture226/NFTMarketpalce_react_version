import { Link } from "react-router-dom";

const CardItem = ({count, img1, img2, heading, subHeading, currBid }) => {
    return (
        <div class="featured-item">
            <div class="featured-item-wrapper">
                <div class="featured-item-content">
                    <div class="fav-counter"><svg class="crumina-icon">
                        <use xlinkHref="#heart-icon"></use>
                    </svg><span class="count">{count}</span></div>
                    <div class="featured-item-image">
                        <Link to="/product-page">
                            <picture>
                                <img src={img1} width="304" height="340" alt="Featured" />
                            </picture>
                        </Link>
                    </div>
                    <div class="featured-item-info">
                        <div class="featured-countdown">
                            <span class="clock"><svg class="crumina-icon">
                                <use xlinkHref="#clock-icon"></use>
                            </svg></span>
                            <span class="js-countdown" data-timer="76403" data-labels="d : , h : , m : , s"></span>
                        </div>
                        <div class="title"> <Link to="/product-page">{heading}</Link></div>
                        <div class="item-meta">
                            <span class="avatar box-26">
                                <Link to="/profile-page">
                                    <picture>
                                        <img src={img2} alt="avatar" loading="lazy" width="100" height="100" />
                                    </picture>
                                </Link>
                                <span class="verified"><svg class="crumina-icon">
                                    <use xlinkHref="#check-icon"></use>
                                </svg></span>
                            </span>
                            {subHeading}
                        </div>
                    </div>
                </div>
                <div class="featured-item-post-content">
                    <div class="featured-item-pricebox">
                        <div class="price-caption">Current BID</div>
                        <div class="price">{currBid}</div>
                    </div>
                    <div class="social-share-box">
                        <div class="social-caption">Share</div>
                        <div class="share-icons">
                            <svg class="crumina-icon">
                                <use xlinkHref="#facebook-icon"></use>
                            </svg>
                            <svg class="crumina-icon">
                                <use xlinkHref="#twitter-icon"></use>
                            </svg>
                            <svg class="crumina-icon">
                                <use xlinkHref="#instagram-icon"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem;