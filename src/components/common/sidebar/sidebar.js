import { avatar } from "../../../img";

const Sidebar = () => {
    return <aside>
        <div class="user-db-menu">
            <div class="user-db-header">
                <div class="user-db-cover-image profile-cover-image"></div>
                <div class="user-header-user-profile">
                    <div class="avatar box-64">
                        <a href="/profile-page">
                            <img src={avatar} alt="avatar" /><span class="verified"><svg
                                class="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                            </svg></span></a>
                    </div>
                    <div class="title"><a href="/profile-page">Dexter Stark</a></div>
                    <div class="item-meta"><span class="gradient-text">@DexterStark</span></div>
                </div>
            </div>
            <div class="user-db-body">
                <ul class="profile-menu">
                    <li class="profile">
                        <a href="/profile-info"><svg class="crumina-icon">
                            <use xlinkHref="#user-icon"></use>
                        </svg>Profile Info</a>
                    </li>
                    <li class="account">
                        <a href="!#"><svg class="crumina-icon">
                            <use xlinkHref="#settings-icon"></use>
                        </svg>Account Settings</a>
                    </li>
                    <li class="notification">
                        <a href="!#"><svg class="crumina-icon">
                            <use xlinkHref="#slide-filter-icon"></use>
                        </svg>Notification Settings</a>
                    </li>
                    <li class="artwork">
                        <a href="/upload-artwork"><svg class="crumina-icon">
                            <use xlinkHref="#picture-icon"></use>
                        </svg>Create Artwork</a>
                    </li>
                    <li class="wallet">
                        <a href="/connect-a-wallet"><svg class="crumina-icon">
                            <use xlinkHref="#wallet-icon"></use>
                        </svg>Wallet info</a>
                    </li>
                    <li class="verification">
                        <a href="!#"><svg class="crumina-icon">
                            <use xlinkHref="#circle-checked-icon"></use>
                        </svg>Get Verified</a>
                    </li>
                    <li class="logout">
                        <a href="!#"><svg class="crumina-icon">
                            <use xlinkHref="#logout-icon"></use>
                        </svg>Log Out</a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
}

export default Sidebar;