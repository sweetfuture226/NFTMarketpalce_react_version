import { Link } from "react-router-dom";

const TopCreatorCard = ({itemNo, img1, img2, img3, img4 }) => {
    return <div class="top-creator-item">
        <div class="creator-number">{itemNo}</div>
        <div class="creator-box">
            <div class="avatar box-64">
                <Link to="/profile-page">
                    <picture>
                        <img src={img1} alt="avatar" loading="lazy" width="100" height="100" />
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
                <Link to="/product-page">
                    <picture>
                        <img src={img2} height="68" width="68" alt="" loading="lazy" />
                    </picture>

                </Link>
            </div>
            <div class="preview-box box-68">
                <Link to="/product-page-v2">
                    <picture>
                        <img src={img3} height="66" width="66" alt="" loading="lazy" />
                    </picture>
                </Link>
            </div>
            <div class="preview-box box-68">
                <Link to="/product-page-v3">
                    <picture>
                        <img src={img4} height="68" width="68" alt="" loading="lazy" />
                    </picture>
                </Link>
            </div>
        </div>
    </div>
}

export default TopCreatorCard;