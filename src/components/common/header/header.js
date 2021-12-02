import { Link } from "react-router-dom";
import { avatar, notiThunb1, notiThunb2, notiThunb3 } from "../../../img";
import cryptokiLogo from "../../../svg";

const Header = () => {
    return <>
        <header class="site-header">
            <div class="topbar padding-top-bottom border-bottom">
                <div class="topbar-wrapper container">

                    <div class="mobile-nav-panel">
                        <div class="mobile-nav-header">

                            <div class="mobile-menu-logo logo"><Link to="/"><img src={cryptokiLogo} alt="" /></Link>
                            </div>

                            <div class="close-icon">
                                <svg class="crumina-icon">
                                    <use xlinkHref="#cross-icon"></use>
                                </svg>
                            </div>

                        </div>

                        <div class="mobile-menu-wrapper">
                            <ul class="mobile-menu">
                                <li class="menu-item"><Link class="menu-link" to="/">Home</Link></li>
                                <li class="menu-item menu-item-has-children"><Link class="menu-link" to="#">Explore
                                    <span class="indicator"><svg class="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon"></use>
                                    </svg></span>
                                </Link>
                                    <ul class="submenu">
                                        <li class="menu-item"><Link class="menu-link" to="/explore">Explore</Link>
                                        </li>
                                        <li class="menu-item"><Link class="menu-link" to="03-explore-v2.html">Explore v2</Link>
                                        </li>
                                        <li class="menu-item"><Link class="menu-link" to="/item-versions">Item versions</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item"><Link class="menu-link" to="/creator">Creators</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="11-collectors.html">Collectors</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="/spotlight">Spotlight</Link></li>
                                <li class="menu-item menu-item-has-children"><Link class="menu-link" to="#">Product<span
                                    class="indicator"><svg class="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon"></use>
                                    </svg></span></Link>
                                    <ul class="submenu">
                                        <li class="menu-item"><Link class="menu-link" to="05-product-page.html">Product v1</Link>
                                        </li>
                                        <li class="menu-item"><Link class="menu-link" to="06-product-page-v2.html">Product v2</Link>
                                        </li>
                                        <li class="menu-item"><Link class="menu-link" to="/product-page-v3">Product v3</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-megamenu menu-item-has-children"><Link class="menu-link" to="#">All
                                    pages<span class="indicator"><svg class="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon"></use>
                                    </svg></span><span class="highlighted-item gradient-background">NEW</span></Link>
                                    <div class="megamenu">
                                        <div class="megamenu-wrapper">
                                            <div class="megamenu-column">
                                                <div class="megamenu-title">Main Pages</div>
                                                <div>
                                                    <ul class="submenu-column">
                                                        <li class="menu-item"><Link to="/" class="menu-link">Home</Link></li>
                                                        <li class="menu-item"><Link to="/explore" class="menu-link">Explore</Link></li>
                                                        <li class="menu-item"><Link to="03-explore-v2.html" class="menu-link">Explore v2</Link></li>
                                                        <li class="menu-item"><Link to="/item-versions" class="menu-link">Item versions</Link>
                                                        </li>
                                                        <li class="menu-item"><Link to="/spotlight" class="menu-link">Spotlight</Link></li>
                                                        <li class="menu-item"><Link to="05-product-page.html" class="menu-link">Product page</Link></li>
                                                        <li class="menu-item"><Link to="06-product-page-v2.html" class="menu-link">Product page
                                                            v2</Link></li>
                                                    </ul>
                                                    <ul class="submenu-column">
                                                        <li class="menu-item"><Link to="/product-page-v3" class="menu-link">Product page
                                                            v3</Link></li>
                                                        <li class="menu-item"><Link to="12-blog-grid.html" class="menu-link">Blog grid</Link></li>
                                                        <li class="menu-item"><Link to="13-blog-classic.html" class="menu-link">Blog classic</Link></li>
                                                        <li class="menu-item"><Link to="14-blog-post-centered.html" class="menu-link">Blog
                                                            postcentered</Link></li>
                                                        <li class="menu-item"><Link to="15-blog-post-sidebar.html" class="menu-link">Blog post
                                                            sidebar</Link></li>
                                                        <li class="menu-item"><Link to="/faq" class="menu-link">FAQ</Link></li>
                                                        <li class="menu-item"><Link to="20-contact.html" class="menu-link">Contact</Link></li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="megamenu-column">
                                                <div class="megamenu-title">User pages</div>
                                                <div>
                                                    <ul class="submenu-column">
                                                        <li class="menu-item"><Link to="/profile-page" class="menu-link">Profile page</Link></li>
                                                        <li class="menu-item"><Link to="/profile-page-about" class="menu-link">Profile page
                                                            about</Link></li>
                                                        <li class="menu-item"><Link to="/profile-info" class="menu-link">Profile info</Link></li>
                                                        <li class="menu-item"><Link to="26-upload-artwork.html" class="menu-link">Upload artwork</Link>
                                                        </li>
                                                        <li class="menu-item"><Link to="25-notifications.html" class="menu-link">Notifications</Link>
                                                        </li>
                                                        <li class="menu-item"><Link to="27-shopping-cart.html" class="menu-link">Shopping cart</Link>
                                                        </li>
                                                        <li class="menu-item"><Link to="28-checkout.html" class="menu-link">Checkout</Link></li>
                                                    </ul>
                                                    <ul class="submenu-column">
                                                        <li class="menu-item"><Link to="/activity" class="menu-link">Activity</Link></li>
                                                        <li class="menu-item"><Link to="/creator" class="menu-link">Creators</Link></li>
                                                        <li class="menu-item"><Link to="11-collectors.html" class="menu-link">Collectors</Link></li>
                                                        <li class="menu-item"><Link to="24-become-a-creator.html" class="menu-link">Become a
                                                            creator</Link></li>
                                                        <li class="menu-item"><Link to="/connect-a-wallet" class="menu-link">Connect a
                                                            wallet</Link></li>
                                                        <li class="menu-item"><Link to="21-login.html" class="menu-link">Login</Link></li>
                                                        <li class="menu-item"><Link to="22-register.html" class="menu-link">Register</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="menu-item menu-item-has-children"><Link class="menu-link" to="#">Blog<span
                                    class="indicator"><svg class="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon"></use>
                                    </svg></span></Link>
                                    <ul class="submenu">
                                        <li class="menu-item"><Link class="menu-link" to="12-blog-grid.html">Blog grid</Link>
                                        </li>
                                        <li class="menu-item"><Link class="menu-link" to="13-blog-classic.html">Blog classic</Link>
                                        </li>
                                        <li class="menu-item"><Link class="menu-link" to="14-blog-post-centered.html">Blog post centered</Link>
                                        </li>
                                        <li class="menu-item"><Link class="menu-link" to="15-blog-post-sidebar.html">Blog post sidebar</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item"><Link class="menu-link" to="/profile-page">My Collection<span class="count">
                                    12</span></Link></li>
                            </ul>
                        </div>

                        <div class="mobile-nav-footer">
                            <ul class="social-icons-list">
                                <li class="social-icon"><Link to="#"><svg class="crumina-icon">
                                    <use xlinkHref="#facebook-icon"></use>
                                </svg></Link></li>
                                <li class="social-icon"><Link to="#"><svg class="crumina-icon">
                                    <use xlinkHref="#twitter-icon"></use>
                                </svg></Link></li>
                                <li class="social-icon"><Link to="#"><svg class="crumina-icon">
                                    <use xlinkHref="#instagram-icon"></use>
                                </svg></Link></li>
                                <li class="social-icon"><Link to="#"><svg class="crumina-icon">
                                    <use xlinkHref="#twitch-icon"></use>
                                </svg></Link></li>
                                <li class="social-icon"><Link to="#"><svg class="crumina-icon">
                                    <use xlinkHref="#discord-icon"></use>
                                </svg></Link></li>
                            </ul>
                        </div>

                    </div>

                    <div class="burger-icon">
                        <svg class="crumina-icon">
                            <use xlinkHref="#menu-icon"></use>
                        </svg>
                    </div>

                    <div class="logo ">
                        <Link class="logo-link" to="/">
                            <div class="logo-img"><img src={cryptokiLogo} alt="logo" /></div>
                            <div class="logo-text">Cryptoki</div>
                        </Link>
                    </div>

                    <div class="searchbox">
                        <form method="get" class="main-search">
                            <input class="main-search-params" type="hidden" name="params" value="all" />
                            <button class="search-params">
                                <span class="search-param-title">All items</span>
                                <svg class="crumina-icon">
                                    <use xlinkHref="#arrow-down-icon"></use>
                                </svg>
                            </button>
                            <ul class="search-dropdown">
                                <li data-param="all">All items</li>
                                <li data-param="auctions">Auctions</li>
                                <li data-param="collections">Collections</li>
                                <li data-param="creators">Creators</li>
                            </ul>
                            <input type="text" class="search-input" name="head-search" id="head-search"
                                placeholder="Enter your search here..." />
                            <button class="search-button">
                                <svg class="crumina-icon">
                                    <use xlinkHref="#search-icon"></use>
                                </svg>
                            </button>
                        </form>
                    </div>

                    <button id="mobile-search">
                        <svg class="crumina-icon open-button">
                            <use id="search" xlinkHref="#search-icon"></use>
                        </svg>
                    </button>

                    <div class="collection-box">
                        <Link class="btn btn-normal btn-dark create-collection" to="26-upload-artwork.html">Create</Link>
                        <div class="collection-title"><Link to="/profile-page">My Collection<span
                            class="count colored">12</span></Link></div>
                    </div>

                    <div class="user-activity-buttons">

                        <div class="cart-button-cont">
                            <button class="cart-button cryptoki-notif-bttn" data-target="cart-dropdown">
                                <span class="counter">3</span>
                                <svg class="crumina-icon">
                                    <use xlinkHref="#bag-icon"></use>
                                </svg>

                            </button>
                            <div id="cart-dropdown" class="cryptoki-notif-target">
                                <div class="title">
                                    Your Cart <span class="colored">3</span>
                                </div>
                                <div class="cart-wrapper">

                                    <div class="cart-product">
                                        <div class="thumb-box">
                                            aaaa
                                            <Link to="05-product-page.html"><img src={notiThunb1} width="50" height="50" alt="UI templates" loading="lazy" /></Link>
                                        </div>
                                        <div class="purchase-info">
                                            <div class="product-info">
                                                <div class="product-title"><Link to="05-product-page.html">Cryptoki NFT and Digital Market PSD
                                                    Template</Link></div>
                                                <div class="product-price">$12.00</div>
                                            </div>
                                            <div class="product-type ui-templates">UI templates</div>
                                        </div>
                                    </div>

                                    <div class="cart-product">
                                        <div class="thumb-box">
                                            <Link to="06-product-page-v2.html"><img src={notiThunb2} width="50" height="50" alt="Social graphics" loading="lazy" /></Link>
                                        </div>
                                        <div class="purchase-info">
                                            <div class="product-info">
                                                <div class="product-title"><Link to="06-product-page-v2.html">Twitter Gaming Headers Pack 04</Link>
                                                </div>
                                                <div class="product-price">$40.00</div>
                                            </div>
                                            <div class="product-type social-graphics">Social graphics</div>
                                        </div>
                                    </div>

                                    <div class="cart-product">
                                        <div class="thumb-box">
                                            <Link to="/product-page-v3"><img src={notiThunb3} width="50" height="50" alt="Coded templates" loading="lazy" /></Link>
                                        </div>
                                        <div class="purchase-info">
                                            <div class="product-info">
                                                <div class="product-title"><Link to="/product-page-v3">Olympus WP - Social Networking
                                                    Theme</Link></div>
                                                <div class="product-price">$68.00</div>
                                            </div>
                                            <div class="product-type coded-templates">Coded templates</div>
                                        </div>
                                    </div>
                                </div>


                                <div class="total-price">
                                    <div class="heading">Cart Total</div>
                                    <div class="price">$120.00</div>
                                </div>
                                <div class="cart-buttons">
                                    <Link to="27-shopping-cart.html" class="btn-small gradient-background btn-square">Go to Cart</Link>
                                    <Link to="28-checkout.html" class="btn-small btn-dark btn-square">Checkout</Link>
                                </div>
                            </div>
                        </div>

                        <div class="favourites-button-cont"><button class="favourites-button cryptoki-notif-bttn" data-target="">
                            <svg class="crumina-icon">
                                <use xlinkHref="#heart-icon"></use>
                            </svg>
                        </button></div>
                        <div class="notifications-button-cont">
                            <button class="notifications-button cryptoki-notif-bttn" data-target="notifications-dropdown">

                                <span class="counter">10</span>
                                <svg class="crumina-icon">
                                    <use xlinkHref="#bell-icon"></use>
                                </svg>

                            </button>

                            <div id="notifications-dropdown" class="cryptoki-notif-target">
                                <div class="title"> Notifications <span class="colored">10</span></div>
                                <div class="notifications-wrapper cryptoki-scrollbar">

                                    <div class="notification">
                                        <div class="thumb-box">
                                            <img src={notiThunb1} width="50" height="50" alt="" loading="lazy" />
                                            <span class="bid-type"><svg class="crumina-icon">
                                                <use xlinkHref="#annotation-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div class="notification-info">
                                            <div class="message">
                                                <Link to="/profile-page" class="bold">@JackieJ</Link> just commented on <Link
                                                    to="05-product-page.html" class="bold">Cryptoki NFT
                                                    and Digital Market PSD Template</Link>
                                            </div>
                                            <div class="publish-date">2 minutes ago</div>
                                        </div>
                                    </div>

                                    <div class="notification">
                                        <div class="thumb-box"><img src={notiThunb1} height="50" width="50" alt="" loading="lazy" />
                                            <span class="purchase-type">
                                                <svg class="crumina-icon">
                                                    <use xlinkHref="#wallet-icon"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="notification-info">
                                            <div class="message">
                                                <Link to="/profile-page" class="bold">@CrimsonRay</Link> just purchased<Link
                                                    to="06-product-page-v2.html" class="bold"> Cryptoki NFT
                                                    and Digital Market PSD Template</Link>
                                            </div>
                                            <div class="publish-date">10 minutes ago</div>
                                        </div>
                                    </div>

                                    <div class="notification">
                                        <div class="thumb-box">
                                            <img src={notiThunb2} width="50" height="50" alt="sad" loading="lazy" />
                                            <span class="like-type"><svg class="crumina-icon">
                                                <use xlinkHref="#heart-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div class="notification-info">
                                            <div class="message">
                                                <Link to="/profile-page" class="bold">@NoirArtks</Link> just liked<Link
                                                    to="/product-page-v3" class="bold">Twitter Gaming
                                                    Headers Pack 04</Link>
                                            </div>
                                            <div class="publish-date">37 minutes ago</div>
                                        </div>
                                    </div>

                                    <div class="notification">
                                        <div class="thumb-box"><img src={notiThunb1} height="50" width="50" alt="" loading="lazy" />
                                            <span class="review-type">
                                                <svg class="crumina-icon">
                                                    <use xlinkHref="#star-icon"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="notification-info">
                                            <div class="message"><Link to="/profile-page" class="bold">@CrimsonRay</Link> just reviewed
                                                <Link to="05-product-page.html" class="bold">Cryptoki NFT and Digital Market PSD Template</Link>
                                            </div>
                                            <div class="publish-date">49 minutes ago</div>
                                        </div>
                                    </div>

                                </div>
                                <Link to="25-notifications.html" class="btn-small-fullwidth btn-dark btn-square">View all
                                    Notifications</Link>
                            </div>
                        </div>

                    </div>


                    <div class="header-user-profile cryptoki-notif-bttn" data-target="profile-dropdown">

                        <div class="user-meta">
                            <div class="user_name">Dexter Stark</div>
                            <div class="user_score"><span><svg class="crumina-icon">
                                <use xlinkHref="#circle-icon"></use>
                            </svg></span>291.36 ETH</div>
                        </div>

                        <div class="avatar box-42">
                            <picture>
                                <img src={avatar} alt="avatar" loading="lazy" width="100" height="100" />
                            </picture>

                            <span class="verified"><svg class="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                            </svg></span>
                        </div>

                        <div class="closing-icon">
                            <svg class="crumina-icon close-icon">
                                <use xlinkHref="#cross-icon"></use>
                            </svg>
                        </div>

                        <div id="profile-dropdown" class="cryptoki-notif-target">
                            <div class="profile-dropdown-header profile-cover-image"></div>
                            <div class="profile-dropdown-body">
                                <div class="profile-heading">

                                    <div class="profile-avatar avatar box-26">
                                        <img src={avatar} alt="avatar" loading="lazy" height="100" width="100" />
                                        <span class="verified"><svg class="crumina-icon">
                                            <use xlinkHref="#check-icon"></use>
                                        </svg></span>
                                    </div>

                                    <div class="profile-link">
                                        <Link class="btn btn-small gradient-background" to="/profile-page">My Profile</Link>
                                    </div>
                                </div>

                                <ul class="profile-menu">
                                    <li class="profile">
                                        <Link to="/profile-info"><svg class="crumina-icon">
                                            <use xlinkHref="#user-icon"></use>
                                        </svg>Profile Info</Link>
                                    </li>
                                    <li class="account">
                                        <Link to="!#"><svg class="crumina-icon">
                                            <use xlinkHref="#settings-icon"></use>
                                        </svg>Account Settings</Link>
                                    </li>
                                    <li class="notification">
                                        <Link to="!#"><svg class="crumina-icon">
                                            <use xlinkHref="#slide-filter-icon"></use>
                                        </svg>Notification Settings</Link>
                                    </li>
                                    <li class="artwork">
                                        <Link to="26-upload-artwork.html"><svg class="crumina-icon">
                                            <use xlinkHref="#picture-icon"></use>
                                        </svg>Create Artwork</Link>
                                    </li>
                                    <li class="wallet">
                                        <Link to="/connect-a-wallet"><svg class="crumina-icon">
                                            <use xlinkHref="#wallet-icon"></use>
                                        </svg>Wallet info</Link>
                                    </li>
                                    <li class="verification">
                                        <Link to="!#"><svg class="crumina-icon">
                                            <use xlinkHref="#circle-checked-icon"></use>
                                        </svg>Get Verified</Link>
                                    </li>
                                    <li class="logout">
                                        <Link to="!#"><svg class="crumina-icon">
                                            <use xlinkHref="#logout-icon"></use>
                                        </svg>Log Out</Link>
                                    </li>
                                </ul>

                            </div>
                            <div class="profile-dropdown-footer">

                                <div class="mode-toggle">
                                    <div class="mode-title"><span><svg class="crumina-icon">
                                        <use xlinkHref="#moon-icon"></use>
                                    </svg></span>Night-mode</div>
                                    <label class="toggle-control">
                                        <input type="checkbox" checked="checked" />
                                        <span class="control"></span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="mobile-search-block">
                <form action="#" id="mobile-search-form">
                    <input type="text" class="search-input" name="mobile-search" placeholder="Enter your search here..." />
                    <button class="search-button"><svg class="crumina-icon">
                        <use xlinkHref="#search-icon"></use>
                    </svg></button>
                </form>
            </div>

        </header>

    </>
}

export default Header;