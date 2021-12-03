const NotificationCard = ({ img, username, commentSubText, commentText, time }) => {
    return <div class="notification">
        <div class="notification-body">
            <div class="thumb-box"><a href="/product-page-v2"><img
                src={img} alt="" /></a><span
                    class="bid-type"><svg class="crumina-icon">
                        <use xlinkHref="#annotation-icon"></use>
                    </svg></span></div>
            <div class="notification-info">
                <div class="message"><a href="/profile-page" class="bold">{username}</a> {commentSubText} <a href="/product-page-v2" class="bold">
                    {commentText}</a></div>
                <div class="publish-date">{time}</div>
            </div>
        </div>
        <div class="action-buttons">
            <button class="close"><svg class="crumina-icon">
                <use xlinkHref="#close-circle-icon"></use>
            </svg></button>
            <form class="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="1"
                class="cryptoki-checkbox" /><label for="1"></label></form>
        </div>
    </div>
}

export default NotificationCard;