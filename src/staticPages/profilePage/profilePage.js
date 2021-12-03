import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import { avatar, avatar10, avatar14, avatar15, avatar2, avatar5, featureItem1, profileCover1, projectThumb1, projectThumb15, projectThumb16, projectThumb17, projectThumb18, projectThumb8, usFlag } from "../../img";
import CardItem from './../../components/staticPages/cards/cardItem';

const ProfilePage = () => {
    return (
        <>
            <Header />
            <SubHeader />

            <div class="primary-content-area profile-page">
                <div class="profile-header-section">
                    <div class="cover-image"><img src={profileCover1} alt="" /></div>
                    <div class="about-author-section container">
                        <div class="profile-header-user-profile">
                            <div class="avatar box-152">
                                <a href="/profile-page"><img src={avatar} alt="" /></a>
                                <span class="verified"><svg class="crumina-icon">
                                    <use xlinkHref="#check-icon"></use>
                                </svg></span>
                            </div>
                            <div class="follow-box">
                                <div class="more-link"><a href="#">
                                    <svg class="crumina-icon">
                                        <use xlinkHref="#dots-icon"></use>
                                    </svg>
                                </a>
                                </div>
                                <button class="btn btn-normal btn-dark">Follow!</button>
                            </div>
                        </div>
                        <div class="author-primary-info">
                            <div class="activity-meta">
                                <div class="followers-number">
                                    <div class="number">903</div>
                                    <div class="label">Followers</div>
                                </div>
                                <div class="following-number">
                                    <div class="number">56</div>
                                    <div class="label">Following</div>
                                </div>
                                <div class="likes-number">
                                    <div class="number">12K</div>
                                    <div class="label">Likes Received</div>
                                </div>
                            </div>
                            <div class="profile-author-info">
                                <h3 class="author-name gradient-text"><a href="/profile-page">Dexter Stark</a></h3>
                                <div class="author-meta">@DexterStark</div>
                                <div class="download-file">
                                    Ox465d53...d9c6
                                    <svg class="crumina-icon">
                                        <use xlinkHref="#copy-icon"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="projects-meta">
                                <div class="projects-number">
                                    <div class="number">135</div>
                                    <div class="label">Created</div>
                                </div>
                                <div class="onsale-number">
                                    <div class="number">12</div>
                                    <div class="label">On Sale</div>
                                </div>
                                <div class="country">
                                    <div class="flag"><img src={usFlag} alt="" /></div>
                                    <div class="label">United States</div>
                                </div>
                            </div>
                        </div>
                        <div class="author-description">
                            <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of my
                                works are inspired by nature and biomechanic themes. What does it mean? Biomechanics is the
                                study...<span class="bold">Read More</span>
                            </p>
                            <ul class="social-icons-list">
                                <li class="social-icon icon-border"><a href="#">
                                    <svg class="crumina-icon">
                                        <use xlinkHref="#link-icon"></use>
                                    </svg>
                                </a></li>
                                <li class="social-icon icon-border"><a href="#">
                                    <svg class="crumina-icon">
                                        <use xlinkHref="#facebook-icon"></use>
                                    </svg>
                                </a></li>
                                <li class="social-icon icon-border"><a href="#">
                                    <svg class="crumina-icon">
                                        <use xlinkHref="#twitter-icon"></use>
                                    </svg>
                                </a></li>
                                <li class="social-icon icon-border"><a href="#">
                                    <svg class="crumina-icon">
                                        <use xlinkHref="#instagram-icon"></use>
                                    </svg>
                                </a></li>
                                <li class="social-icon icon-border"><a href="#">
                                    <svg class="crumina-icon">
                                        <use xlinkHref="#twitch-icon"></use>
                                    </svg>
                                </a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="profile-header-mobile">
                    <div class="cover-image"><img src={profileCover1} alt="" /></div>
                    <div class="about-author-section container">
                        <div class="profile-header-user-profile">
                            <div class="avatar box-64 bordered">
                                <a href="/profile-page"><img src={avatar} alt="" /></a>
                                <span class="verified"><svg class="crumina-icon">
                                    <use xlinkHref="#check-icon"></use>
                                </svg></span>
                            </div>
                            <div class="profile-author-info">
                                <h5 class="author-name gradient-text"><a href="/profile-page">Dexter Stark</a></h5>
                                <div class="author-meta">@DexterStark</div>
                                <div class="download-file">
                                    Ox465d53...d9c6
                                    <svg class="crumina-icon">
                                        <use xlinkHref="#copy-icon"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="follow-container">
                            <div class="more-link-wrapper">
                                <div class="more-link"><a href="#">
                                    <svg class="crumina-icon">
                                        <use xlinkHref="#dots-icon"></use>
                                    </svg>
                                </a>
                                </div>
                            </div>
                            <div class="follow-box">
                                <button class="btn btn-wide btn-dark">Follow!</button>
                            </div>
                        </div>
                    </div>
                    <ul class="social-icons-list">
                        <li class="social-icon icon-border"><a href="#">
                            <svg class="crumina-icon">
                                <use xlinkHref="#link-icon"></use>
                            </svg>
                        </a></li>
                        <li class="social-icon icon-border"><a href="#">
                            <svg class="crumina-icon">
                                <use xlinkHref="#facebook-icon"></use>
                            </svg>
                        </a></li>
                        <li class="social-icon icon-border"><a href="#">
                            <svg class="crumina-icon">
                                <use xlinkHref="#twitter-icon"></use>
                            </svg>
                        </a></li>
                        <li class="social-icon icon-border"><a href="#">
                            <svg class="crumina-icon">
                                <use xlinkHref="#instagram-icon"></use>
                            </svg>
                        </a></li>
                        <li class="social-icon icon-border"><a href="#">
                            <svg class="crumina-icon">
                                <use xlinkHref="#twitch-icon"></use>
                            </svg>
                        </a></li>
                    </ul>
                    <div class="author-primary-info">
                        <div class="activity-meta">
                            <div class="followers-number">
                                <div class="number">903</div>
                                <div class="label">Followers</div>
                            </div>
                            <div class="following-number">
                                <div class="number">56</div>
                                <div class="label">Following</div>
                            </div>
                            <div class="projects-number">
                                <div class="number">135</div>
                                <div class="label">Created</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="profile-page-container container">
                    <div class="tabs-block swiper-container">
                        <div class="swiper-nav">
                            <div class="swiper-button-next">
                                <svg class="crumina-icon next-button">
                                    <use xlinkHref="#arrow-right2-icon"></use>
                                </svg>
                            </div>
                            <div class="swiper-button-prev">
                                <svg class="crumina-icon prev-button">
                                    <use xlinkHref="#arrow-left2-icon"></use>
                                </svg>
                            </div>
                        </div>

                        <ul class="tabs-list swiper-wrapper">
                            <li class="swiper-slide active"><a href="#tab1">Created <span class="count">135</span></a>
                            </li>
                            <li class="swiper-slide"><a href="#tab2">Collected <span class="count">48</span></a></li>
                            <li class="swiper-slide"><a href="#tab3">On Sale <span class="count">12</span></a></li>
                            <li class="swiper-slide"><a href="#tab4">Liked <span class="count">7.2K</span></a></li>
                            <li class="swiper-slide"><a href="#tab5">Following <span class="count">56</span></a></li>
                            <li class="swiper-slide"><a href="#tab6">Followers <span class="count">903</span></a></li>
                            <li class="swiper-slide"><a href="#tab7">Activity</a></li>
                            <li class="swiper-slide"><a href="#tab8">About</a></li>
                        </ul>

                        <div class="tabs-content-wrapper">
                            <div id="tab1" class="tab active">
                                <div class="tab-content">
                                    <div class="featured-box grid-4-columns">
                                        {Array.from(Array(12)).map((x, i) => {
                                            return <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" class="tab"></div>
                            <div id="tab3" class="tab"></div>
                            <div id="tab4" class="tab"></div>
                            <div id="tab5" class="tab"></div>
                            <div id="tab6" class="tab"></div>

                            <div id="tab7" class="tab">
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
                                                    <img src={avatar14} alt="avatar" /></a>
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
                                                <img src={projectThumb15} alt="" /></a>
                                            </div>
                                        </div>
                                        <div class="activity-item like">
                                            <div class="bid-placer">
                                                <div class="avatar box-42"><a href="/profile-page">
                                                    <img src={avatar5} alt="avatar" /></a><span
                                                        class="verified"><svg class="crumina-icon">
                                                            <use xlinkHref="#check-icon"></use>
                                                        </svg></span>
                                                </div>
                                                <div class="bid-info">
                                                    <div class="bid-title"><span class="gradient-text"><a
                                                        href="/profile-page">Noir Artworks</a></span>
                                                        liked <span class="colored"><a
                                                            href="/product-page-v2">Canary’s Kitchen</a></span>
                                                    </div>
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
                                                    <img src={avatar} alt="avatar" /></a><span
                                                        class="verified"><svg class="crumina-icon">
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
                                                            href="/product-page-v2">Bubblegum Dream</a></span>
                                                        for 3.01ETH
                                                        (169.478 U$D)
                                                    </div>
                                                    <div class="bid-date">56 minutes ago</div>
                                                </div>
                                            </div>
                                            <div class="bid-product"><a href="/product-page-v2">
                                                <img src={projectThumb18} alt="" /></a>
                                            </div>
                                        </div>
                                        <div class="activity-item listing">
                                            <div class="bid-placer">
                                                <div class="avatar box-42"><a href="/profile-page">
                                                    <img src={avatar2} alt="avatar" /></a><span
                                                        class="verified"><svg class="crumina-icon">
                                                            <use xlinkHref="#check-icon"></use>
                                                        </svg></span>
                                                </div>
                                                <div class="bid-info">
                                                    <div class="bid-title"><span class="gradient-text"><a
                                                        href="/profile-page">Jackie Jones</a></span> just
                                                        listed <span class="colored"><a href="/product-page-v2">Soul
                                                            Picz Block</a></span> for 3.25ETH (259.022
                                                        U$D)
                                                    </div>
                                                    <div class="bid-date">58 minutes ago</div>
                                                </div>
                                            </div>
                                            <div class="bid-product"><a href="/product-page-v2">
                                                <img src={projectThumb8} alt="" /></a>
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
                                                <img src={projectThumb16} alt="" /></a>
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
                           
                            <div id="tab8" class="tab">
                                <div class="tab-content">
                                    <div class="about-author-wrapper">
                                        <div class="author-bio">
                                            <div class="small-title">Full Bio</div>
                                            <p>I am a self-taught digital artist who specializes in 3d art and motion
                                                graphics.
                                                Most of my works are inspired by nature and biomechanic themes.</p>
                                            <p>What does it mean? Biomechanics is the study of the structure, function and
                                                motion of the mechanical aspects of biological systems, at any level from
                                                whole
                                                organisms to organs, cells and cell organelles, using the methods of
                                                mechanics.
                                                Biomechanics is a branch of biophysics.</p>
                                        </div>
                                        <div class="author-details">
                                            <div class="small-title">Details</div>
                                            <ul class="details-list">
                                                <li><svg class="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon"></use>
                                                </svg><span class="detail-label">Joined</span><span class="bold">January
                                                    5th,
                                                    2021</span></li>
                                                <li><svg class="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon"></use>
                                                </svg><span class="detail-label">Formats</span><span
                                                    class="bold">Austin, TX -
                                                        United States</span></li>
                                                <li><svg class="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon"></use>
                                                </svg><span class="detail-label">Email</span><span class="bold"><a
                                                    href="mailto:dexstarkart@fakemail.com">dexstarkart@fakemail.com</a></span>
                                                </li>
                                                <li><svg class="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon"></use>
                                                </svg><span class="detail-label">Speciality</span><span
                                                    class="bold">Motion
                                                        Graphics</span></li>
                                            </ul>
                                        </div>
                                        <div class="author-social-networks">
                                            <div class="small-title">Social Media</div>
                                            <ul class="social-styled-list">
                                                <li><a href="#">
                                                    <span class="marker"><svg class="crumina-icon">
                                                        <use xlinkHref="#link-icon"></use>
                                                    </svg></span>www.dexstarkart.com<span class="verified">
                                                        <svg class="crumina-icon">
                                                            <use xlinkHref="#check-icon"></use>
                                                        </svg>
                                                    </span>
                                                </a></li>
                                                <li><a href="#"><span class="marker"><svg class="crumina-icon">
                                                    <use xlinkHref="#facebook-icon"></use>
                                                </svg></span>@dexstarkart</a></li>
                                                <li><a href="#"><span class="marker"><svg class="crumina-icon">
                                                    <use xlinkHref="#twitter-icon"></use>
                                                </svg></span>@dexstark_art<span class="verified"><svg
                                                    class="crumina-icon">
                                                    <use xlinkHref="#check-icon"></use>
                                                </svg></span></a></li>
                                                <li><a href="#"><span class="marker"><svg class="crumina-icon">
                                                    <use xlinkHref="#instagram-icon"></use>
                                                </svg></span>@dexstark<span class="verified"><svg
                                                    class="crumina-icon">
                                                    <use xlinkHref="#check-icon"></use>
                                                </svg></span></a></li>
                                                <li><a href="#"><span class="marker"><svg class="crumina-icon">
                                                    <use xlinkHref="#twitch-icon"></use>
                                                </svg></span>@dexstarkstreams</a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfilePage;