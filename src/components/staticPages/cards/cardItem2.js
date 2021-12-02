import { Link } from "react-router-dom";

const CardItem2 = ({img1, img2, heading, currBid, likes }) => {
    return (
        <div class="featured-item v2">
            <div class="featured-item-wrapper">
                <div class="featured-item-content">
                    <div class="featured-item-image">
                        <Link href="/product-page"><img src={img1} alt="" /></Link>
                    </div>
                    <div class="featured-item-info">
                        <div class="featured-countdown"><span class="clock"><svg class="crumina-icon">
                            <use xlinkHref="#clock-icon"></use>
                        </svg></span><span class="js-countdown" data-timer="116400"
                            data-labels="d : , h : , m : , s"></span></div>
                        <div class="title"><Link href="/product-page">{heading}</Link></div>
                        <div class="item-meta"><span class="avatar box-26"><Link href="/profile-page"><img
                            src={img2} alt="" /></Link><span class="verified"><svg class="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                            </svg></span></span>
                            <div class="featured-item-pricebox">
                                <div class="price-caption">Current BID</div>
                                <div class="price">{currBid}</div>
                            </div>
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
                    <div class="fav-counter"><svg class="crumina-icon">
                        <use xlinkHref="#heart-icon"></use>
                    </svg><span class="count">{likes}</span></div>
                </div>
            </div>
        </div>
    )
}

export default CardItem2;