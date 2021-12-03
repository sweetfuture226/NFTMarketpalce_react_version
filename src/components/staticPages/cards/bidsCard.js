import { Link } from "react-router-dom";

const BidCard = ({ img1, bidPlacedBy, time, eth, amount }) => {
    return <div class="placed-bid">
        <div class="bid-placer">
            <div class="avatar box-42">
                <Link to="/profile-page">
                    <img src={img1} alt="avatar" />
                </Link>
            </div>
            <div class="bid-info">
                <div class="bid-title">
                    Bid placed by{" "}
                    <span class="gradient-text">
                        <Link to="/profile-page">{bidPlacedBy}</Link>
                    </span>
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

export default BidCard;