import { useEffect } from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {

  return (
    <nav class="border-bottom">
      <div class="navigation-wrapper container flex-space-between align-items-center">
        <ul class="navigation-menu">
          <li class="menu-item">
            <Link class="menu-link" to="/">
              Home
            </Link>
          </li>
          <li class="menu-item menu-item-has-children">
            <Link class="menu-link" to="#">
              Explore
              <span class="indicator">
                <svg class="crumina-icon">
                  <use xlinkHref="#arrow-down-icon"></use>
                </svg>
              </span>
            </Link>
            <ul class="submenu">
              <li class="menu-item">
                <Link class="menu-link" to="/explore">
                  Explore
                </Link>
              </li>
              <li class="menu-item">
                <Link class="menu-link" to="03-explore-v2.html">
                  Explore v2
                </Link>
              </li>
              <li class="menu-item">
                <Link class="menu-link" to="/item-versions">
                  Item versions
                </Link>
              </li>
            </ul>
          </li>
          <li class="menu-item">
            <Link class="menu-link" to="/creator">
              Creators
            </Link>
          </li>
          <li class="menu-item">
            <Link class="menu-link" to="11-collectors.html">
              Collectors
            </Link>
          </li>
          <li class="menu-item">
            <Link class="menu-link" to="/spotlight">
              Spotlight
            </Link>
          </li>
          <li class="menu-item menu-item-has-children">
            <Link class="menu-link" to="#">
              Product
              <span class="indicator">
                <svg class="crumina-icon">
                  <use xlinkHref="#arrow-down-icon"></use>
                </svg>
              </span>
            </Link>
            <ul class="submenu">
              <li class="menu-item">
                <Link class="menu-link" to="/product-page">
                  Product v1
                </Link>
              </li>
              <li class="menu-item">
                <Link class="menu-link" id="loadLinkId" to="/product-page-v2">
                  Product v2
                </Link>
              </li>
              <li class="menu-item">
                <Link class="menu-link" to="/product-page-v3">
                  Product v3
                </Link>
              </li>
            </ul>
          </li>
          <li class="menu-item menu-item-has-megamenu menu-item-has-children">
            <Link class="menu-link" to="#">
              All pages
              <span class="indicator">
                <svg class="crumina-icon">
                  <use xlinkHref="#arrow-down-icon"></use>
                </svg>
              </span>
            </Link>
            <span class="highlighted-item gradient-background">NEW</span>
            <div class="megamenu">
              <div class="megamenu-wrapper">
                <div class="megamenu-column">
                  <div class="megamenu-title">Main Pages</div>
                  <div class="flex-space-between">
                    <ul class="submenu-column">
                      <li class="menu-item">
                        <Link to="/" class="menu-link">
                          Home
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/explore" class="menu-link">
                          Explore
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="03-explore-v2.html" class="menu-link">
                          Explore v2
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/item-versions" class="menu-link">
                          Item versions
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/spotlight" class="menu-link">
                          Spotlight
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/product-page" class="menu-link">
                          Product page
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/product-page-v2" class="menu-link">
                          Product page v2
                        </Link>
                      </li>
                    </ul>
                    <ul class="submenu-column">
                      <li class="menu-item">
                        <Link to="/product-page-v3" class="menu-link">
                          Product page v3
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="12-blog-grid.html" class="menu-link">
                          Blog grid
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="13-blog-classic.html" class="menu-link">
                          Blog classic
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="14-blog-post-centered.html" class="menu-link">
                          Blog postcentered
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="15-blog-post-sidebar.html" class="menu-link">
                          Blog post sidebar
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/faq" class="menu-link">
                          FAQ
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="20-contact.html" class="menu-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="megamenu-column">
                  <div class="megamenu-title">User pages</div>
                  <div class="flex-space-between">
                    <ul class="submenu-column">
                      <li class="menu-item">
                        <Link to="/profile-page" class="menu-link">
                          Profile page
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/profile-page-about" class="menu-link">
                          Profile page about
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/profile-info" class="menu-link">
                          Profile info
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="26-upload-artwork.html" class="menu-link">
                          Upload artwork
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="25-notifications.html" class="menu-link">
                          Notifications
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="27-shopping-cart.html" class="menu-link">
                          Shopping cart
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="28-checkout.html" class="menu-link">
                          Checkout
                        </Link>
                      </li>
                    </ul>
                    <ul class="submenu-column">
                      <li class="menu-item">
                        <Link to="/activity" class="menu-link">
                          Activity
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/creator" class="menu-link">
                          Creators
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="11-collectors.html" class="menu-link">
                          Collectors
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="24-become-a-creator.html" class="menu-link">
                          Become a creator
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/connect-a-wallet" class="menu-link">
                          Connect a wallet
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="21-login.html" class="menu-link">
                          Login
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="22-register.html" class="menu-link">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="menu-item menu-item-has-children">
            <Link class="menu-link" to="#">
              Blog
              <span class="indicator">
                <svg class="crumina-icon">
                  <use xlinkHref="#arrow-down-icon"></use>
                </svg>
              </span>
            </Link>
            <ul class="submenu">
              <li class="menu-item">
                <Link class="menu-link" to="12-blog-grid.html">
                  Blog grid
                </Link>
              </li>
              <li class="menu-item">
                <Link class="menu-link" to="13-blog-classic.html">
                  Blog classic
                </Link>
              </li>
              <li class="menu-item">
                <Link class="menu-link" to="14-blog-post-centered.html">
                  Blog post centered
                </Link>
              </li>
              <li class="menu-item">
                <Link class="menu-link" to="15-blog-post-sidebar.html">
                  Blog post sidebar
                </Link>
              </li>
            </ul>
          </li>
          <li class="menu-item hidden-menu">
            <Link class="menu-link" to="#">
              <svg class="crumina-icon">
                <use xlinkHref="#dots-icon"></use>
              </svg>
            </Link>
            <ul class="hidden-menu-dropdown submenu">
              <li class="menu-item">
                <Link to="/faq" class="menu-link">
                  Frequently Asked Questions
                </Link>
              </li>
              <li class="menu-item">
                <Link to="24-become-a-creator.html" class="menu-link">
                  Become a Creator
                </Link>
              </li>
              <li class="menu-item">
                <Link to="20-contact.html" class="menu-link">
                  Contact Us
                </Link>
              </li>
              <li class="menu-item">
                <Link to="21-login.html" class="menu-link">
                  Login
                </Link>
              </li>
              <li class="menu-item">
                <Link to="22-register.html" class="menu-link">
                  Register
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="social-icons-list">
          <li class="social-icon">
            <Link to="#">
              <svg class="crumina-icon">
                <use xlinkHref="#facebook-icon"></use>
              </svg>
            </Link>
          </li>
          <li class="social-icon">
            <Link to="#">
              <svg class="crumina-icon">
                <use xlinkHref="#twitter-icon"></use>
              </svg>
            </Link>
          </li>
          <li class="social-icon">
            <Link to="#">
              <svg class="crumina-icon">
                <use xlinkHref="#instagram-icon"></use>
              </svg>
            </Link>
          </li>
          <li class="social-icon">
            <Link to="#">
              <svg class="crumina-icon">
                <use xlinkHref="#twitch-icon"></use>
              </svg>
            </Link>
          </li>
          <li class="social-icon">
            <Link to="#">
              <svg class="crumina-icon">
                <use xlinkHref="#discord-icon"></use>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SubHeader;
