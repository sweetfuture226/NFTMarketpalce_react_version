import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import { avatar, avatar10, avatar14, avatar15, avatar2, avatar5, avatar8, projectThumb1, projectThumb14, projectThumb16, projectThumb17, projectThumb5, projectThumb8, projectThumb9 } from "../../img";

const Activity = () => {
    return <>
        <Header />
        <SubHeader />

        <div class="primary-content-area container content-padding">
            <div class="section-title-wrapper">
                <div class="section-title"><span class="gradient-text">Activity</span> Stream</div>
            </div>
            <div class="activity-stream">
                <div class="tabs-block swiper-container">
                    <div class="swiper-nav">
                        <div class="swiper-button-next"><svg class="crumina-icon next-button">
                            <use xlinkHref="#arrow-right2-icon"></use>
                        </svg></div>
                        <div class="swiper-button-prev"><svg class="crumina-icon prev-button">
                            <use xlinkHref="#arrow-left2-icon"></use>
                        </svg></div>
                    </div>
                    <ul class="tabs-list swiper-wrapper">
                        <li class="swiper-slide active"><a href="#tab1">All Activity</a></li>
                        <li class="swiper-slide"><a href="#tab2">Listings</a></li>
                        <li class="swiper-slide"><a href="#tab3">Sales</a></li>
                        <li class="swiper-slide"><a href="#tab4">Purchases</a></li>
                        <li class="swiper-slide"><a href="#tab5">Bids</a></li>
                        <li class="swiper-slide"><a href="#tab6">Likes</a></li>
                        <li class="swiper-slide"><a href="#tab7">Follows</a></li>
                    </ul>
                    <div id="tab1" class="tab active">
                        <div class="tab-content">
                            <div class="activity-list">
                                <div class="activity-item bid">
                                    <div class="bid-placer">
                                        <div class="avatar box-42"><a href="/profile-page">
                                            <img src={avatar15} alt="avatar" /></a>
                                        </div>
                                        <div class="bid-info">
                                            <div class="bid-title">Bid placed by <span class="gradient-text"><a
                                                href="/profile-page">Crimson
                                                Ray</a></span> of 2.31ETH (125.230 U$D) for <span
                                                    class="colored"><a href="/product-page-v2">Breathing
                                                        Nature</a></span> by <span class="gradient-text"><a
                                                            href="/profile-page">Dexter Stark</a></span></div>
                                            <div class="bid-date">32 minutes ago</div>
                                        </div>
                                    </div>
                                    <div class="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb1} alt="" /></a>
                                    </div>
                                </div>
                                <div class="activity-item bid">
                                    <div class="bid-placer">
                                        <div class="avatar box-42"><a href="/profile-page">
                                            <img src={avatar8} alt="avatar" /></a>
                                        </div>
                                        <div class="bid-info">
                                            <div class="bid-title">Bid placed by <span class="gradient-text"><a
                                                href="/profile-page">JennArt</a></span> of 1.90ETH
                                                (86.325 U$D) for
                                                <span class="colored"><a href="/product-page-v2">Social
                                                    Blockz</a></span> by <span class="gradient-text"><a
                                                        href="/profile-page">Jackie Jones</a></span>
                                            </div>
                                            <div class="bid-date">39 minutes ago</div>
                                        </div>
                                    </div>
                                    <div class="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb5} alt="" /></a>
                                    </div>
                                </div>
                                <div class="activity-item like">
                                    <div class="bid-placer">
                                        <div class="avatar box-42"><a href="/profile-page">
                                            <img src={avatar5} alt="avatar" /></a><span class="verified"><svg
                                                class="crumina-icon">
                                                <use xlinkHref="#check-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div class="bid-info">
                                            <div class="bid-title"><span class="gradient-text"><a
                                                href="/profile-page">Noir Artworks</a></span>
                                                liked <span class="colored"><a href="/product-page-v2">Canary’s
                                                    Kitchen</a></span></div>
                                            <div class="bid-date">47 minutes ago</div>
                                        </div>
                                    </div>
                                    <div class="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb16} alt="" /></a>
                                    </div>
                                </div>
                                <div class="activity-item follow">
                                    <div class="bid-placer">
                                        <div class="avatar box-42"><a href="/profile-page">
                                            <img src={avatar10} alt="avatar" /></a><span
                                                class="verified"><svg class="crumina-icon">
                                                    <use xlinkHref="#check-icon"></use>
                                                </svg></span>
                                        </div>
                                        <div class="bid-info">
                                            <div class="bid-title"><span class="gradient-text"><a
                                                href="/profile-page">Nicholas Stevens</a></span>
                                                is now following <span class="gradient-text"><a
                                                    href="/profile-page">Jackie Jones</a></span></div>
                                            <div class="bid-date">52 minutes ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="activity-item sale">
                                    <div class="bid-placer">
                                        <div class="avatar box-42"><a href="/profile-page">
                                            <img src={avatar} alt="avatar" /></a><span class="verified"><svg
                                                class="crumina-icon">
                                                <use xlinkHref="#check-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div class="bid-info">
                                            <div class="bid-title"><span class="gradient-text"><a
                                                href="/profile-page">Dexter Stark</a></span> sold
                                                <span class="colored"><a href="/product-page-v2">Golden
                                                    Ebony</a></span> for 1.97ETH (104.368 U$D)
                                            </div>
                                            <div class="bid-date">53 minutes ago</div>
                                        </div>
                                    </div>
                                    <div class="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb17} alt="" /></a>
                                    </div>
                                </div>
                                <div class="activity-item purchase">
                                    <div class="bid-placer">
                                        <div class="avatar box-42"><a href="/profile-page">
                                            <img src={avatar14} alt="avatar" /></a>
                                        </div>
                                        <div class="bid-info">
                                            <div class="bid-title"><span class="gradient-text"><a
                                                href="/profile-page">Derek Greyson</a></span>
                                                purchased <span class="colored"><a
                                                    href="/product-page-v2">Bubblegum Dream</a></span> for
                                                3.01ETH
                                                (169.478 U$D)
                                            </div>
                                            <div class="bid-date">56 minutes ago</div>
                                        </div>
                                    </div>
                                    <div class="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb8} alt="" /></a>
                                    </div>
                                </div>
                                <div class="activity-item listing">
                                    <div class="bid-placer">
                                        <div class="avatar box-42"><a href="/profile-page">
                                            <img src={avatar2} alt="avatar" /></a><span class="verified"><svg
                                                class="crumina-icon">
                                                <use xlinkHref="#check-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div class="bid-info">
                                            <div class="bid-title"><span class="gradient-text"><a
                                                href="/profile-page">Jackie Jones</a></span> just
                                                listed <span class="colored"><a href="/product-page-v2">Soul Picz
                                                    Block</a></span> for 3.25ETH (259.022
                                                U$D)
                                            </div>
                                            <div class="bid-date">58 minutes ago</div>
                                        </div>
                                    </div>
                                    <div class="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb9} alt="" /></a>
                                    </div>
                                </div>
                                <div class="activity-item bid">
                                    <div class="bid-placer">
                                        <div class="avatar box-42"><a href="/profile-page">
                                            <img src={avatar15} alt="avatar" /></a>
                                        </div>
                                        <div class="bid-info">
                                            <div class="bid-title">Bid placed by <span class="gradient-text"><a
                                                href="/profile-page">Crimson
                                                Ray</a></span> of 0.25ETH (67.007u$d) for <span
                                                    class="colored"><a
                                                        href="/product-page-v2">Octo-Oceanic</a></span></div>
                                            <div class="bid-date">59 minutes ago</div>
                                        </div>
                                    </div>
                                    <div class="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb14} alt="" /></a>
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
                </div>
            </div>

        </div>

        <Footer />
    </>
}

export default Activity;