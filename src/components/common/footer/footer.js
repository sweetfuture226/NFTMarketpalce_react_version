import cryptokiLogo from "../../../svg";
import { Link } from "react-router-dom";
import { footerImg1, footerImg2, footerImg3, footerImg4, footerImg5, footerImg6, footerImg7, footerImg8 } from "../../../img";

const Footer = () => {
    return <>
        <div class="before-footer-block">
            <div class="before-footer-image"><img src={footerImg1} alt="" /></div>
            <div class="before-footer-image"><img src={footerImg2} alt="" /></div>
            <div class="before-footer-image"><img src={footerImg3} alt="" /></div>
            <div class="before-footer-image"><img src={footerImg4} alt="" /></div>
            <div class="before-footer-image"><img src={footerImg5} alt="" /></div>
            <div class="before-footer-image"><img src={footerImg6} alt="" /></div>
            <div class="before-footer-image"><img src={footerImg7} alt="" /></div>
            <div class="before-footer-image"><img src={footerImg8} alt="" /></div>
        </div>
        <footer class="footer">
            <div class="footer-wrapper container">
                <div class="footer-content flex-space-between">
                    <div class="footer-column footer-column-large">
                        <div class="footer-widget">
                            <div class="logo">
                                <Link class="logo-link" to="/">
                                    <div class="logo-img"><img src={cryptokiLogo} alt="logo" /></div>
                                    <div class="logo-text">Cryptoki</div>
                                </Link>
                            </div>
                            <div class="footer-text">
                                <p>We are a huge marketplace dedicated to connecting great artists of all mediums with their fans and
                                    unique token collectors!</p>
                            </div>
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
                            <div class="subscribe-widget">
                                <form class="cryptoki-subscribe-form subscribe-form" action="forms/submit.php">
                                    <div class="subscribe-form-content">
                                        <input class="subscribe-input" type="email" name="email" id="subscribe-email"
                                            placeholder="Subscribe to our newsletter" />
                                        <button class="subscribe-submit" type="submit"><svg class="crumina-icon">
                                            <use xlinkHref="#arrow-right-icon"></use>
                                        </svg></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="footer-column">
                        <div class="footer-widget">
                            <div class="widget-title">Cryptoki Market</div>
                            <div class="is-two-col-element">
                                <ul class="footer-menu">
                                    <li class="menu-item"><Link class="menu-link" to="/">Home</Link></li>
                                    <li class="menu-item"><Link class="menu-link" to="/explore">Explore</Link></li>
                                    <li class="menu-item"><Link class="menu-link" to="/creator">Creators</Link></li>
                                    <li class="menu-item"><Link class="menu-link" to="/creator">Collectors</Link></li>
                                    <li class="menu-item"><Link class="menu-link" to="/spotlight">Spotlight</Link></li>
                                </ul>
                                <ul class="footer-menu">
                                    <li class="menu-item"><Link class="menu-link" to="/profile-page">Profile Page</Link></li>
                                    <li class="menu-item"><Link class="menu-link" to="03-explore-v2.html">Artwork Page</Link></li>
                                    <li class="menu-item"><Link class="menu-link" to="/activity">Activity</Link></li>
                                    <li class="menu-item"><Link class="menu-link" to="/upload-artwork">Upload Art</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-column">
                        <div class="footer-widget">
                            <div class="widget-title">Explore</div>
                            <ul class="footer-menu">
                                <li class="menu-item"><Link class="menu-link" to="/explore">3D Artworks</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="03-explore-v2.html">Motion Graphics</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="/item-versions">Illustrations</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="/explore">Photography</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="03-explore-v2.html">Pop Culture</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-column">
                        <div class="footer-widget">
                            <div class="widget-title">Helpful Links</div>
                            <ul class="footer-menu">
                                <li class="menu-item"><Link class="menu-link" to="13-blog-classic.html">Our Blog</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="/become-a-creator">Become a Creator</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="/faq">FAQs</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="!#">About Us</Link></li>
                                <li class="menu-item"><Link class="menu-link" to="20-contact.html">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright flex-space-between">
                    <span class="copyright-text">
                        Cryptoki 2021 - All Rights Reserved
                    </span>
                    <ul class="sub-footer-menu">
                        <li class="menu-item"><Link class="menu-link" to="!#">Terms of Service</Link></li>
                        <li class="menu-item"><Link class="menu-link" to="!#">Privacy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;