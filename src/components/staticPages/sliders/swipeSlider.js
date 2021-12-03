import { Link } from "react-router-dom";

const SwipeSlider = ({img1, img2, username, heading, currBid}) => {
    return <>
        <picture>
            <img
                src={img1}
                width="940"
                height="640"
                alt="SlideImage"
                loading="lazy"
            />
        </picture>

        <div class="dark-overlay"></div>
        <div class="slide-content">
            <div class="item-info">
                <div class="item-meta">
                    <span class="avatar box-26">
                        <Link to="/profile-page">
                            <picture>
                                <img
                                    src={img2}
                                    alt="avatar"
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                />
                            </picture>
                        </Link>
                        <span class="verified">
                            <svg class="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                            </svg>
                        </span>
                    </span>
                    {username}
                </div>
                <div class="title slide-title">{heading}</div>
                <div class="item-bid-section">
                    <div class="bid-item">
                        <div class="label">Current bid</div>
                        <div class="value">{currBid}</div>
                    </div>
                    <div class="bid-item">
                        <div class="label">AUCTION ENDING IN</div>
                        <div class="countdown">
                            <div class="value">
                                <span
                                    class="js-countdown"
                                    data-timer="19560"
                                    data-labels="d : , h : , m : , s"
                                ></span>
                            </div>
                        </div>
                    </div>
                    <div class="gradient-border_white-bg slide-button">
                        <Link class="btn btn-normal" to="/product-page">
                            Go to Item!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SwipeSlider;