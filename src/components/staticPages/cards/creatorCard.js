import { avatar, creatorCover1, projectThumb1, projectThumb2, projectThumb21 } from "../../../img";

const CreatorCard = () => {
    return <div class="creator-item">
        <div class="creator-cover">
            <img src={creatorCover1} alt="" />
        </div>
        <div class="creator-wrapper">
            <div class="creator-info-wrapper">
                <div class="creator-info">
                    <div class="avatar box-64">
                        <a href="/profile-page">
                            <img src={avatar} alt="avatar" /><span class ="verified"><svg class ="crumina-icon">
                            <use xlinkHref="#check-icon"></use>
                            </svg></span></a>
                    </div>
                    <div class="title"><a href="/profile-page">Dexter Stark</a></div>
                    <div class="item-meta"><span class="gradient-text">@DexterStark</span></div>
                </div>
                <div class="follow-me">
                    <button class="btn btn-small btn-dark">Follow!</button>
                </div>
            </div>
            <ul class="social-icons-list">
                <li class="social-icon icon-border"><a href="#"><svg class="crumina-icon">
                    <use xlinkHref="#link-icon"></use>
                </svg></a></li>
                <li class="social-icon icon-border"><a href="#"><svg class="crumina-icon">
                    <use xlinkHref="#facebook-icon"></use>
                </svg></a></li>
                <li class="social-icon icon-border"><a href="#"><svg class="crumina-icon">
                    <use xlinkHref="#twitter-icon"></use>
                </svg></a></li>
                <li class="social-icon icon-border"><a href="#"><svg class="crumina-icon">
                    <use xlinkHref="#instagram-icon"></use>
                </svg></a></li>
                <li class="social-icon icon-border"><a href="#"><svg class="crumina-icon">
                    <use xlinkHref="#twitch-icon"></use>
                </svg></a></li>
            </ul>
            <div class="about-creator">
                <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of
                    my...
                </p>
            </div>
            <div class="projects-previews">
                <div class="preview-box"><a href="/product-page-v3"><img
                    src={projectThumb1} alt="" /></a></div>
                <div class="preview-box"><a href="/product-page-v3"><img
                     src={projectThumb2} alt="" /></a></div>
                <div class="preview-box"><a href="/product-page-v3"><img
                     src={projectThumb21} alt="" /></a></div>
                <div class="preview-box more-projects"><a href="/profile-page"><svg class="crumina-icon">
                    <use xlinkHref="#dots-icon"></use>
                </svg></a></div>
            </div>
        </div>
        <div class="creator-stats">
            <div class="stats-item">
                <div class="label">Followers</div>
                <div class="number">903</div>
            </div>
            <div class="stats-item">
                <div class="label">Following</div>
                <div class="number">56</div>
            </div>
            <div class="stats-item">
                <div class="label">Created</div>
                <div class="number">135</div>
            </div>
        </div>
    </div>
}

export default CreatorCard;