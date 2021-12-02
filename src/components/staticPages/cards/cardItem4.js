import { Link } from "react-router-dom";

const CardItem4 = ({ img1, img2, count, creator, heading, currBid }) => {
    return (
        <div class="featured-item v4">
            <div class="featured-item-wrapper">
                <div class="featured-item-content">
                    <div class="fav-counter"><svg class="crumina-icon">
                        <use xlinkHref="#heart-icon"></use>
                    </svg><span class="count">{count}</span></div>
                    <div class="featured-item-image">
                        <a href="/product-page"><img src={img1} alt="" /></a>
                    </div>
                    <div class="featured-item-author">
                        <div class="title"><a href="/product-page">{heading}</a></div>
                        <div class="item-meta"><span class="gradient-text"><a
                            href="/profile-page">{creator}</a></span></div>
                    </div>
                    <div class="avatar box-42"><a href="/profile-page"><img src={img2} alt="" /></a>
                        <span class="verified"><svg class="crumina-icon">
                            <use xlinkHref="#check-icon"></use>
                        </svg></span>
                    </div>
                    <div class="featured-bidding-section">
                        <div class="featured-item-pricebox">
                            <div class="price">{currBid}</div>
                            <div class="price-caption">Current BID</div>
                        </div>
                        <div class="place-bid"><button class="btn btn-small-wide btn-dark">Bid!</button></div>
                    </div>
                </div>
                <div class="featured-item-post-content">
                    <div class="countdown-box">
                        <div class="label">Ending in</div>
                        <div class="countdown">
                            <div class="value js-countdown" data-timer="104400" data-labels="d: , h: , m: , s"></div>
                        </div>
                    </div>
                    <div class="social-share-box">
                        <div class="social-caption">Share</div>
                        <div class="share-icons">
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
    )
}

export default CardItem4;