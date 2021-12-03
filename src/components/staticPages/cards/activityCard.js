import { Link } from "react-router-dom";

const ActivityCard = ({tag, img1, username, time, eth, amount }) => {
    return <div class={`activity-item ${tag ? tag : ""}`}>
        <div class="bid-placer">
            <div class="avatar box-42">
                <Link to="/profile-page">
                    <img src={img1} alt="avatar" />
                    <span class="verified">
                        <svg class="crumina-icon">
                            <use xlinkHref="#check-icon"></use>
                        </svg>
                    </span>
                </Link>
            </div>
            <div class="bid-info">
                <div class="bid-title">
                    <span class="gradient-text">
                        <Link to="/profile-page">{username}</Link>
                    </span>{" "}
                    {tag}
                </div>
                <div class="bid-date">{time}</div>
            </div>
        </div>
        <div class="bid-box">
            <div class="crypto-value">{eth}</div>
            <div class="currency-value">{amount}</div>
        </div>
    </div>

}

export default ActivityCard;