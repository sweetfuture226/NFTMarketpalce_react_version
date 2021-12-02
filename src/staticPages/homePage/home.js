import SubHeader from "../../components/common/header/subHeader";
import { avatar, avatar10, avatar2, avatar3, avatar5, avatar8, featureItem1, featureItem2, featureItem3, featureItem4, projectThumb1, projectThumb10, projectThumb11, projectThumb12, projectThumb13, projectThumb14, projectThumb15, projectThumb16, projectThumb17, projectThumb18, projectThumb19, projectThumb2, projectThumb20, projectThumb21, projectThumb3, projectThumb4, projectThumb5, projectThumb8, projectThumb9, sliderImg1, sliderImg2, sliderImg3, projectThumb22, subtleImg2, subtleImg1, newsThumb1, newsThumb2, newsThumb3 } from "../../img";
import Header from "./../../components/common/header/header";
import Footer from './../../components/common/footer/footer';
import CardItem from './../../components/staticPages/cards/cardItem';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <SubHeader />

            <div class="primary-content-area bottom-padding-70">
                <div class="section-padding">
                    <div id="homeSlider" class="swiper">
                        <div class="swiper-wrapper">
                            <div id="slide-1" class="swiper-slide">
                                <picture>
                                    <img
                                        src={sliderImg3}
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
                                                            src={avatar}
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
                                            @DexterStark
                                        </div>
                                        <div class="title slide-title">Lost in Illustration</div>
                                        <div class="item-bid-section">
                                            <div class="bid-item">
                                                <div class="label">Current bid</div>
                                                <div class="value">2.31 ETH</div>
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
                                                <Link class="btn btn-normal" to="05-product-page.html">
                                                    Go to Item!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="slide-2" class="swiper-slide slide-content-align-right">
                                <picture>
                                    <img
                                        src={sliderImg1}
                                        width="940"
                                        height="640"
                                        alt="SlideImage"
                                    />
                                </picture>

                                <div class="dark-overlay"></div>
                                <div class="slide-content">
                                    <div class="slide-subtitle">WELCOME TO CRYPTOKI</div>
                                    <div class="slide-title">Discover the Best Artworks!</div>
                                    <div class="gradient-border-purple-bg slide-button">
                                        <Link class="btn btn-normal" to="/explore">
                                            Explore Now!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div id="slide-3" class="swiper-slide">
                                <picture>
                                    <img
                                        src={sliderImg2}
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
                                                            src={avatar}
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
                                            @DexterStark
                                        </div>
                                        <div class="title slide-title">Breathing Nature</div>
                                        <div class="item-bid-section">
                                            <div class="bid-item">
                                                <div class="label">Current bid</div>
                                                <div class="value">2.31 ETH</div>
                                            </div>
                                            <div class="bid-item">
                                                <div class="label">AUCTION ENDING IN</div>
                                                <div class="countdown">
                                                    <div class="value">
                                                        <span
                                                            class="js-countdown"
                                                            data-timer="19353"
                                                            data-labels="d : , h : , m : , s"
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="gradient-border_dark-bg slide-button">
                                                <Link
                                                    class="btn btn-normal"
                                                    to="06-product-page-v2.html"
                                                >
                                                    Go to Item!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="homeslider-nav">
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
                    </div>
                </div>


                <div class="container section-padding overflow-hidden">
                    <div class="section-title-wrapper">
                        <div class="section-title"><span class="gradient-text">Featured</span> Items</div>
                        <div class="title-navigation">
                            <div class="featured-carousel-icon swiper-button-prev"><svg class="crumina-icon">
                                <use xlinkHref="#arrow-left2-icon"></use>
                            </svg></div>
                            <div class="featured-carousel-icon swiper-button-next"><svg class="crumina-icon">
                                <use xlinkHref="#arrow-right2-icon"></use>
                            </svg></div>
                        </div>
                    </div>
                    <div class="featured-carousel">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                            </div>
                            <div class="swiper-slide">
                                <CardItem count="68" img1={featureItem2} img2={avatar2} heading="Social Blockz" subHeading="@JackieJ" currBid="1.96 ETH" />
                            </div>
                            <div class="swiper-slide">
                                <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                            </div>
                            <div class="swiper-slide">
                                <CardItem count="68" img1={featureItem2} img2={avatar2} heading="Social Blockz" subHeading="@JackieJ" currBid="1.96 ETH" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container section-padding">
                    <div class="section-title-wrapper">
                        <div class="section-title">Top <span class="gradient-text">Creators</span></div>
                    </div>
                    <div class="top-creators-box grid-2-columns">
                        <div class="top-creator-item">
                            <div class="creator-number">01</div>
                            <div class="creator-box">
                                <div class="avatar box-64">
                                    <Link to="/profile-page">
                                        <picture>
                                            <img src={avatar} alt="avatar" loading="lazy" width="100" height="100" />
                                        </picture>
                                        <span class="verified"><svg class="crumina-icon">
                                            <use xlinkHref="#check-icon"></use>
                                        </svg></span></Link>
                                </div>
                                <div class="creator-meta">
                                    <div class="title"><Link to="/profile-page">Dexter Stark</Link></div>
                                    <div class="creator-meta">@DexterStark</div>
                                </div>
                            </div>
                            <div class="projects-score">
                                <div class="number title">135</div>
                                <div class="label">Created</div>
                            </div>
                            <div class="projects-previews">
                                <div class="preview-box box-68">
                                    <Link to="05-product-page.html">
                                        <picture>
                                            <img src={projectThumb1} height="68" width="68" alt="" loading="lazy" />
                                        </picture>

                                    </Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="06-product-page-v2.html">
                                        <picture>
                                            <img src={projectThumb2} height="66" width="66" alt="" loading="lazy" />
                                        </picture>
                                    </Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="/product-page-v3">
                                        <picture>
                                            <img src={projectThumb3} height="68" width="68" alt="" loading="lazy" />
                                        </picture>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="top-creator-item">
                            <div class="creator-number">02</div>
                            <div class="creator-box">
                                <div class="avatar box-64">
                                    <Link to="/profile-page">
                                        <img src={avatar2} width="52" height="52" alt="avatar" loading="lazy" /><span class="verified"><svg class="crumina-icon">
                                            <use xlinkHref="#check-icon"></use>
                                        </svg></span></Link>
                                </div>
                                <div class="creator-meta">
                                    <div class="title"><Link to="/profile-page">Jackie Jones</Link></div>
                                    <div class="creator-meta">@JackieJ</div>
                                </div>
                            </div>
                            <div class="projects-score">
                                <div class="number title">107</div>
                                <div class="label">Created</div>
                            </div>
                            <div class="projects-previews">
                                <div class="preview-box box-68">
                                    <Link to="05-product-page.html">
                                        <picture>
                                            <img src={projectThumb5} height="68" width="68" alt="" loading="lazy" />
                                        </picture>
                                    </Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="06-product-page-v2.html">
                                        <picture>
                                            <img src={projectThumb9} height="74" width="74" alt="" loading="lazy" />
                                        </picture>

                                    </Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="/product-page-v3">
                                        <picture>
                                            <img src={projectThumb10} height="68" width="68" alt="" loading="lazy" />
                                        </picture>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="top-creator-item">
                            <div class="creator-number">03</div>
                            <div class="creator-box">
                                <div class="avatar box-64">
                                    <Link to="/profile-page">
                                        <img src={avatar5} height="52" width="52" alt="avatar" loading="lazy" /><span class="verified"><svg class="crumina-icon">
                                            <use xlinkHref="#check-icon"></use>
                                        </svg></span></Link>
                                </div>
                                <div class="creator-meta">
                                    <div class="title"><Link to="/profile-page">Noir Artworks</Link></div>
                                    <div class="creator-meta">@noirArtks</div>
                                </div>
                            </div>
                            <div class="projects-score">
                                <div class="number title">94</div>
                                <div class="label">Created</div>
                            </div>
                            <div class="projects-previews">
                                <div class="preview-box box-68">
                                    <Link to="05-product-page.html">
                                        <picture>
                                            <img src={projectThumb4} height="68" width="68" alt="" loading="lazy" />
                                        </picture>
                                    </Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="06-product-page-v2.html">
                                        <picture>
                                            <img src={projectThumb11} height="68" width="68" alt="" loading="lazy" />
                                        </picture>
                                    </Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="/product-page-v3">
                                        <picture>
                                            <img src={projectThumb12} height="68" width="68" alt="" loading="lazy" />
                                        </picture>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="top-creator-item">
                            <div class="creator-number">04</div>
                            <div class="creator-box">
                                <div class="avatar box-64">
                                    <Link to="/profile-page">
                                        <img src={avatar3} height="52" width="52" alt="avatar" loading="lazy" /><span class="verified"><svg class="crumina-icon">
                                            <use xlinkHref="#check-icon"></use>
                                        </svg></span></Link>
                                </div>
                                <div class="creator-meta">
                                    <div class="title"><Link to="/profile-page">The Green Goo</Link></div>
                                    <div class="creator-meta">@daGreenGoo</div>
                                </div>
                            </div>
                            <div class="projects-score">
                                <div class="number title">83</div>
                                <div class="label">Created</div>
                            </div>
                            <div class="projects-previews">
                                <div class="preview-box box-68">
                                    <Link to="05-product-page.html"><img src={projectThumb13} height="68" width="68" alt="" loading="lazy" /></Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="06-product-page-v2.html"><img src={projectThumb14} height="68" width="68" alt="" loading="lazy" /></Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="/product-page-v3"><img src={projectThumb8} height="74" width="74" alt="" loading="lazy" /></Link>
                                </div>
                            </div>
                        </div>
                        <div class="top-creator-item">
                            <div class="creator-number">05</div>
                            <div class="creator-box">
                                <div class="avatar box-64">
                                    <Link to="/profile-page">
                                        <img src={avatar10} width="52" height="52" alt="avatar" loading="lazy" /><span class="verified"><svg class="crumina-icon">
                                            <use xlinkHref="#check-icon"></use>
                                        </svg></span></Link>
                                </div>
                                <div class="creator-meta">
                                    <div class="title"><Link to="/profile-page">Nicholas Stevens</Link></div>
                                    <div class="creator-meta">@nickstevens</div>
                                </div>
                            </div>
                            <div class="projects-score">
                                <div class="number title">50</div>
                                <div class="label">Created</div>
                            </div>
                            <div class="projects-previews">
                                <div class="preview-box box-68">
                                    <Link to="05-product-page.html"><img src={projectThumb15} height="68" width="68" alt="" loading="lazy" /></Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="06-product-page-v2.html"><img src={projectThumb16} height="68" width="68" alt="" loading="lazy" /></Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="/product-page-v3"><img src={projectThumb17} height="68" width="68" alt="" loading="lazy" /></Link>
                                </div>
                            </div>
                        </div>
                        <div class="top-creator-item">
                            <div class="creator-number">06</div>
                            <div class="creator-box">
                                <div class="avatar box-64"><Link to="/profile-page">
                                    <img src={avatar8} height="52" width="52" alt="avatar" loading="lazy" /><span class="verified"><svg class="crumina-icon">
                                        <use xlinkHref="#check-icon"></use>
                                    </svg></span></Link>
                                </div>
                                <div class="creator-meta">
                                    <div class="title"><Link to="/profile-page">Bearded Wonder</Link></div>
                                    <div class="creator-meta">@beardedwndr</div>
                                </div>
                            </div>
                            <div class="projects-score">
                                <div class="number title">26</div>
                                <div class="label">Created</div>
                            </div>
                            <div class="projects-previews">
                                <div class="preview-box box-68">
                                    <Link to="05-product-page.html"><img src={projectThumb18} height="68" width="68" alt="" loading="lazy" /></Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="06-product-page-v2.html"><img src={projectThumb19} height="68" width="68" alt="" loading="lazy" /></Link>
                                </div>
                                <div class="preview-box box-68">
                                    <Link to="/product-page-v3"><img src={projectThumb20} height="68" width="68" alt="" loading="lazy" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container section-padding">
                    <div class="section-title-wrapper">
                        <div class="section-title"><span class="gradient-text">Newest</span> Items</div>
                        <div class="all-items-link"><Link to="/explore">Explore all Artworks</Link></div>
                    </div>

                    <div class="featured-box">
                        <div class="featured-box-wrapper grid-4-columns">
                            {Array.from(Array(12)).map((x, i) => {
                                return <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                            })}
                        </div>
                        <div class="more-section flex-center">
                            <Link class="btn btn-normal btn-dark" to="03-explore-v2.html">View All Artworks</Link>
                        </div>
                    </div>

                </div>

                <div class="container section-padding">
                    <div class="section-title-wrapper">
                        <div class="section-title"><span class="gradient-text">Featured</span> Creators</div>
                        <div class="all-items-link"><Link to="/creator">Explore all Creators</Link></div>
                    </div>
                    <div class="featured-creators-box grid-2-columns">
                        <div class="featured-creators-item">
                            <img src={subtleImg1} width="470" height="640" alt="" loading="lazy" />
                            <div class="featured-creators-wrapper">
                                <div class="featured-creators-info-wrapper">
                                    <div class="featured-creators-info">
                                        <div class="title h4"><Link to="/profile-page">Dexter Stark</Link></div>
                                        <div class="item-meta">
                                            <span class="avatar box-26">
                                                <Link to="/profile-page"><img src={avatar} height="100" width="100" alt="" loading="lazy" /></Link>
                                                <span class="verified"><svg class="crumina-icon"><use xlinkHref="#check-icon"></use></svg></span>
                                            </span>
                                            @DexterStark
                                        </div>
                                    </div>
                                    <div class="follow-me gradient-border_white-bg">
                                        <button class="btn btn-normal">Follow!</button>
                                    </div>
                                </div>
                                <ul class="social-icons-list">
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#link-icon"></use>
                                    </svg></Link></li>
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#facebook-icon"></use>
                                    </svg></Link></li>
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#twitter-icon"></use>
                                    </svg></Link></li>
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#instagram-icon"></use>
                                    </svg></Link></li>
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#twitch-icon"></use>
                                    </svg></Link></li>
                                </ul>
                                <div class="about-creator">
                                    <p>I’m a graphic designer and illustrator from Mexico City. Since 2 years ago I specialize on big mural
                                        pieces and street art that you can find in countries all around the world!</p>
                                </div>
                                <div class="creator-stats">
                                    <div class="stats-item">
                                        <div class="number title">12.3K</div>
                                        <div class="label">Followers</div>
                                    </div>
                                    <div class="stats-item">
                                        <div class="number title">7.2K</div>
                                        <div class="label">Following</div>
                                    </div>
                                    <div class="stats-item">
                                        <div class="number title">135</div>
                                        <div class="label">Created</div>
                                    </div>
                                    <div class="stats-item">
                                        <div class="number title">9</div>
                                        <div class="label">On Sale</div>
                                    </div>
                                </div>
                                <div class="projects-previews">
                                    <div class="preview-box">
                                        <Link to="05-product-page.html">
                                            <img src={projectThumb1} width="68" height="68" alt="" loading="lazy" />
                                        </Link>
                                    </div>
                                    <div class="preview-box">
                                        <Link to="06-product-page-v2.html"><img src={projectThumb2} height="66" width="66" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div class="preview-box">
                                        <Link to="/product-page-v3"><img src={projectThumb3} width="68" height="68" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div class="preview-box">
                                        <Link to="05-product-page.html"><img src={projectThumb21} height="50" width="50" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div class="preview-box more-projects">
                                        <Link to="/profile-page"><svg class="crumina-icon"><use xlinkHref="#dots-icon"></use></svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="featured-creators-item">
                            <img src={subtleImg2} width="470" height="640" alt="" loading="lazy" />
                            <div class="featured-creators-wrapper">
                                <div class="featured-creators-info-wrapper">
                                    <div class="featured-creators-info">
                                        <div class="title h4"><Link to="/profile-page">Noir Artworks</Link></div>
                                        <div class="item-meta"><span class="avatar box-26">
                                            <Link to="/profile-page"><img src={avatar5} height="52" width="52" alt="" loading="lazy" /></Link>
                                            <span class="verified">
                                                <svg class="crumina-icon">
                                                    <use xlinkHref="#check-icon"></use>
                                                </svg></span></span>@noirArtks</div>
                                    </div>
                                    <div class="follow-me gradient-border_white-bg">
                                        <button class="btn btn-normal">Follow!</button>
                                    </div>
                                </div>
                                <ul class="social-icons-list">
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#twitter-icon"></use>
                                    </svg></Link></li>
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#instagram-icon"></use>
                                    </svg></Link></li>
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#twitch-icon"></use>
                                    </svg></Link></li>
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#pinterest-icon"></use>
                                    </svg></Link></li>
                                    <li class="social-icon icon-border"><Link to="#"><svg class="crumina-icon">
                                        <use xlinkHref="#reddit-icon"></use>
                                    </svg></Link></li>
                                </ul>
                                <div class="about-creator">
                                    <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of my works are
                                        inspired by nature and bio-mechanic themes, but I also create the occasional character.</p>
                                </div>
                                <div class="creator-stats">
                                    <div class="stats-item">
                                        <div class="number title">8.3K</div>
                                        <div class="label">Followers</div>
                                    </div>
                                    <div class="stats-item">
                                        <div class="number title">5.6K</div>
                                        <div class="label">Following</div>
                                    </div>
                                    <div class="stats-item">
                                        <div class="number title">54</div>
                                        <div class="label">Created</div>
                                    </div>
                                    <div class="stats-item">
                                        <div class="number title">5</div>
                                        <div class="label">On Sale</div>
                                    </div>
                                </div>
                                <div class="projects-previews">
                                    <div class="preview-box">
                                        <Link to="05-product-page.html"><img src={projectThumb4} width="68" height="68" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div class="preview-box">
                                        <Link to="06-product-page-v2.html"><img src={projectThumb11} height="68" width="68" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div class="preview-box">
                                        <Link to="/product-page-v3"><img src={projectThumb12} width="68" height="68" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div class="preview-box">
                                        <Link to="05-product-page.html"><img src={projectThumb22} height="50" width="50" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div class="preview-box more-projects">
                                        <Link to="/profile-page"><svg class="crumina-icon"><use xlinkHref="#dots-icon"></use></svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="call-to-action-box">
                        <div class="animated-img"></div>
                        <div class="call-to-action-text">
                            <div class="subtitle">COME AND JOIN THEM!</div>
                            <div class="h2">Become a Creator!</div>
                        </div>
                        <div class="subscribe-form">
                            <Link to="24-become-a-creator.html" class="btn btn-normal btn-dark">Start Selling!</Link>
                        </div>
                    </div>
                </div>

                <div class="container section-padding">
                    <div class="section-title-wrapper">
                        <div class="section-title">Latest <span class="gradient-text">News</span></div>
                        <div class="all-items-link"><Link to="12-blog-grid.html">View all Blog Posts</Link></div>
                    </div>
                    <div class="latest-news-box grid-3-columns">
                        <div class="news-item">
                            <div class="news-thumb">
                                <Link to="14-blog-post-centered.html">
                                    <img src={newsThumb1} width="460" height="260" alt="" loading="lazy" /></Link>
                            </div>
                            <div class="news-content">
                                <div class="news-meta">
                                    <div class="news-tags">
                                        <span class="tag-item"><Link>Guides</Link></span>
                                    </div>
                                    by <Link to="/profile-page">Cryptoki</Link>, March 26th, 2021
                                </div>
                                <div class="news-title h5"><Link to="15-blog-post-sidebar.html">We explain with details everything you need
                                    to know
                                    about crypto art and
                                    cryptocurrencies!</Link></div>
                                <div class="news-excerpt">A cryptocurrency is a digital asset designed to work as a medium of exchange
                                    wherein individual coin ownership records...</div>
                                <div class="read-more-link">
                                    <Link to="14-blog-post-centered.html">Read More<svg class="crumina-icon">
                                        <use xlinkHref="#arrow-right2-icon"></use>
                                    </svg></Link>
                                </div>
                            </div>
                        </div>
                        <div class="news-item">
                            <div class="news-thumb">
                                <Link to="14-blog-post-centered.html">
                                    <img src={newsThumb2} height="260" width="460" alt="" loading="lazy" /></Link>
                            </div>
                            <div class="news-content">
                                <div class="news-meta">
                                    <div class="news-tags">
                                        <span class="tag-item"><Link>Guides</Link></span>
                                        <span class="tag-item"><Link>News</Link></span>
                                    </div>
                                    by <Link to="/profile-page">Marina Valentine</Link>, March 13th, 2021
                                </div>
                                <div class="news-title h5"><Link to="15-blog-post-sidebar.html">Here’s a quick guide about how to make
                                    money
                                    selling your artworks with
                                    Criptoki!</Link></div>
                                <div class="news-excerpt">A cryptocurrency is a digital asset designed to work as a medium of exchange
                                    wherein individual coin ownership records...</div>
                                <div class="read-more-link">
                                    <Link to="15-blog-post-sidebar.html">Read More<svg class="crumina-icon">
                                        <use xlinkHref="#arrow-right2-icon"></use>
                                    </svg></Link>
                                </div>
                            </div>
                        </div>
                        <div class="news-item">
                            <div class="news-thumb">
                                <Link to="15-blog-post-sidebar.html">
                                    <img src={newsThumb3} width="460" height="260" alt="" loading="lazy" /></Link>
                            </div>
                            <div class="news-content">
                                <div class="news-meta">
                                    <div class="news-tags">
                                        <span class="tag-item"><Link>Currencies</Link></span>
                                    </div>
                                    by <Link to="/profile-page">Cryptoki</Link>, March 4th, 2021
                                </div>
                                <div class="news-title h5"><Link to="15-blog-post-sidebar.html">What’s ETH? An in-depth view of the
                                    currency used
                                    in the market</Link></div>
                                <div class="news-excerpt">A cryptocurrency is a digital asset designed to work as a medium of exchange
                                    wherein individual coin ownership records...</div>
                                <div class="read-more-link">
                                    <Link to="15-blog-post-sidebar.html">Read More<svg class="crumina-icon">
                                        <use xlinkHref="#arrow-right2-icon"></use>
                                    </svg></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
