import { Link } from "react-router-dom";

const BlogCard = ({ img, heading, description, date, username, tabButtons }) => {
    return <div class="news-item">
        <div class="news-thumb">
            <Link to="14-blog-post-centered.html">
                <img src={img} width="460" height="260" alt="" loading="lazy" /></Link>
        </div>
        <div class="news-content">
            <div class="news-meta">
                <div class="news-tags">
                    {(tabButtons || []).map((v, i) => {
                        return <span key={i} class="tag-item"><Link>{v}</Link></span>
                    })}
                </div>
                by <Link to="/profile-page">{username}</Link>, {date}
            </div>
            <div class="news-title h5"><Link to="15-blog-post-sidebar.html">{heading}</Link></div>
            <div class="news-excerpt">{description}</div>
            <div class="read-more-link">
                <Link to="14-blog-post-centered.html">Read More<svg class="crumina-icon">
                    <use xlinkHref="#arrow-right2-icon"></use>
                </svg></Link>
            </div>
        </div>
    </div>
}

export default BlogCard;