import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import NotificationCard from "../../components/staticPages/notification/notificationCard";
import { avatar2, notiThumb4, notiThumb5 } from "../../img";

const Notification = () => {
    return (
        <>

            <Header />
            <SubHeader />

            <div class="primary-content-area container grid-aside-main-4-col content-padding">
            <aside>
                <div class="aside-wrapper">
                    <div class="widget widget-filter-panel notifications">
                        <div class="widget-title h6">Filters</div>
                        <form class="cryptoki-form" id="filter-form">
                            <div class="form-group">
                                <div class="small-title">Show</div>
                                <div class="form-list-elem">
                                    <input type="checkbox" name="all" id="all" class="cryptoki-checkbox" />
                                    <label for="all">All</label>
                                </div>
                                <div class="form-list-elem">
                                    <input type="checkbox" name="sales" id="sales" class="cryptoki-checkbox" />
                                    <label for="sales">Sales</label>
                                </div>
                                <div class="form-list-elem">
                                    <input type="checkbox" name="likes" id="likes" class="cryptoki-checkbox" />
                                    <label for="likes">Likes</label>
                                </div>
                                <div class="form-list-elem">
                                    <input type="checkbox" name="comments" id="comments" class="cryptoki-checkbox" />
                                    <label for="comments">Comments</label>
                                </div>
                                <div class="form-list-elem">
                                    <input type="checkbox" name="reviews" id="reviews" class="cryptoki-checkbox" />
                                    <label for="reviews">Reviews</label>
                                </div>
                                <div class="form-list-elem">
                                    <input type="checkbox" name="follows" id="follows" class="cryptoki-checkbox" />
                                    <label for="follows">Follows</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="small-title">Order by</div>
                                <div class="form-list-elem">
                                    <input type="radio" name="type" id="newest" class="cryptoki-radio" />
                                    <label for="newest">Newest</label>
                                </div>
                                <div class="form-list-elem">
                                    <input type="radio" name="type" id="oldest" class="cryptoki-radio" />
                                    <label for="oldest">Oldest</label>
                                </div>
                                <div class="form-list-elem">
                                    <input type="radio" name="type" id="buy-now" class="cryptoki-radio" />
                                    <label for="buy-now">Buy Now</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </aside>
            <div class="main-content-area">
                <div class="page-title">
                    <h2><span class="gradient-text">Notifications</span></h2>
                </div>
                <div class="notifications-list">
                    <div class="command-line">
                        <button class="command select-all">Select All</button>
                        <button class="command">Mark as Read</button>
                        <button class="command delete">Delete</button>
                    </div>
                    <div class="notifications-list-wrapper" >
                        <NotificationCard img={notiThumb4} username="@JackieJ" time="2 minutes ago" commentSubText="just commented on" commentText="Cryptoki NFT and Digital Market PSD Template" />
                        <NotificationCard img={notiThumb4} username=">@CrimsonRay" time="10 minutes ago" commentSubText="just purchased" commentText="Cryptoki NFT and Digital Market PSD Template" />
                       
                        <div class="notification">
                            <div class="notification-body">
                                <div class="thumb-box"><a href="/product-page-v2"><img
                                            src={notiThumb4} alt="" /></a><span
                                        class="purchase-type"><svg class="crumina-icon">
                                            <use xlinkHref="#wallet-icon"></use>
                                        </svg></span></div>
                                <div class="notification-info">
                                    <div class="message"><a href="/profile-page" class="bold">@CrimsonRay</a>
                                        just purchased<a href="/product-page-v2" class="bold"> Cryptoki NFT and
                                            Digital Market PSD Template</a></div>
                                    <div class="publish-date">10 minutes ago</div>
                                </div>
                            </div>
                            <div class="action-buttons">
                                <button class="close"><svg class="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form class="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="2"
                                        class="cryptoki-checkbox" /><label for="2"></label></form>
                            </div>
                        </div>
                        <div class="notification">
                            <div class="notification-body">
                                <div class="thumb-box"><a href="/product-page-v2"><img
                                            src={notiThumb5} alt="" /></a><span
                                        class="like-type"><svg class="crumina-icon">
                                            <use xlinkHref="#heart-icon"></use>
                                        </svg></span></div>
                                <div class="notification-info">
                                    <div class="message"><a href="/profile-page" class="bold">@NoirArtks</a> just
                                        liked<a href="/product-page-v2" class="bold">
                                            Twitter Gaming Headers Pack 04</a></div>
                                    <div class="publish-date">37 minutes ago</div>
                                </div>
                            </div>
                            <div class="action-buttons">
                                <button class="close"><svg class="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form class="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="3"
                                        class="cryptoki-checkbox" /><label for="3"></label></form>
                            </div>
                        </div>
                        <div class="notification">
                            <div class="notification-body">
                                <div class="thumb-box"><a href="/product-page-v2"><img
                                            src={notiThumb4} alt="" /></a><span
                                        class="review-type"><svg class="crumina-icon">
                                            <use xlinkHref="#star-icon"></use>
                                        </svg></span></div>
                                <div class="notification-info">
                                    <div class="message"><a href="/profile-page" class="bold">@CrimsonRay</a>
                                        just reviewed<a href="/product-page-v2" class="bold">
                                            Cryptoki NFT and Digital Market PSD Template</a></div>
                                    <div class="publish-date">49 minutes ago</div>
                                </div>
                            </div>
                            <div class="action-buttons">
                                <button class="close"><svg class="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form class="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="4"
                                        class="cryptoki-checkbox" /><label for="4"></label></form>
                            </div>
                        </div>
                        <div class="notification">
                            <div class="notification-body">
                                <div class="thumb-box"><a href="/product-page-v2"><img
                                            src={notiThumb4} alt="" /></a><span
                                        class="comment-type"><svg class="crumina-icon">
                                            <use xlinkHref="#annotation-dots-icon"></use>
                                        </svg></span></div>
                                <div class="notification-info">
                                    <div class="message"><a href="/profile-page" class="bold">@beardedwndr</a>
                                        just commented<a href="/product-page-v2" class="bold">
                                            Cryptoki NFT and Digital Market PSD Template</a></div>
                                    <div class="publish-date">51 minutes ago</div>
                                </div>
                            </div>
                            <div class="action-buttons">
                                <button class="close"><svg class="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form class="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="5"
                                        class="cryptoki-checkbox" /><label for="5"></label></form>
                            </div>
                        </div>
                        <div class="notification">
                            <div class="notification-body">
                                <div class="avatar box-64">
                                    <a href="/profile-page">
                                        <img src={avatar2} alt="avatar" /><span class="verified"><svg
                                                class="crumina-icon">
                                                <use xlinkHref="#check-icon"></use>
                                            </svg></span></a>
                                </div>
                                <div class="notification-info">
                                    <div class="message"><a href="/profile-page" class="bold">@JackieJ</a> just
                                        started following you
                                    </div>
                                    <div class="publish-date">55 minutes ago</div>
                                </div>
                            </div>
                            <div class="action-buttons">
                                <button class="close"><svg class="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form class="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="6"
                                        class="cryptoki-checkbox" /><label for="6"></label></form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="load-more_bars">
                    <div class="load-more_bar"></div>
                    <div class="load-more_bar"></div>
                    <div class="load-more_bar"></div>
                    <div class="load-more_bar"></div>
                    <div class="load-more_bar"></div>
                    <div class="load-more_bar"></div>
                    <div class="load-more_bar"></div>
                    <div class="load-more_bar"></div>
                </div>
            </div>
        </div>

            <Footer />

        </>
    )
}

export default Notification;