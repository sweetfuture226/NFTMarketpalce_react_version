import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import { avatar, avatarUpload, profileCover1 } from "../../img";

const ProfileIntro = () => {
    return <>

        <Header />
        <SubHeader />

        <div class="primary-content-area container content-padding grid-left-sidebar">
            <aside>
                <div class="user-db-menu">
                    <div class="user-db-header">
                        <div class="user-db-cover-image profile-cover-image"></div>
                        <div class="user-header-user-profile">
                            <div class="avatar box-64">
                                <a href="08-profile-page.html">
                                    <img src={avatar} alt="avatar" /><span class="verified"><svg
                                        class="crumina-icon">
                                        <use xlinkHref="#check-icon"></use>
                                    </svg></span></a>
                            </div>
                            <div class="title"><a href="08-profile-page.html">Dexter Stark</a></div>
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
                                <a href="26-upload-artwork.html"><svg class="crumina-icon">
                                    <use xlinkHref="#picture-icon"></use>
                                </svg>Create Artwork</a>
                            </li>
                            <li class="wallet">
                                <a href="18-connect-a-wallet.html"><svg class="crumina-icon">
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
            <div class="main-content-area">
                <div class="page-title">
                    <h2>
                        <span class="gradient-text">Profile</span> Info
                    </h2>
                </div>
                <div class="user-db-content-area">
                    <form class="cryptoki-form" id="personal-info-form">
                        <div class="user-db-title">Personal Info</div>
                        <div class="form-group">
                            <div class="form-field">
                                <label for="name">Full name</label>
                                <input type="text" id="name" value="Dexter Stark" />
                            </div>
                            <div class="form-field">
                                <label for="email">Email address</label>
                                <input type="email" id="email" value="dexstark@fakemail.com" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-field">
                                <label for="username">Username</label>
                                <input type="text" id="username" value="dexterstark" />
                            </div>
                            <div class="form-field">
                                <label for="phone">Phone contact</label>
                                <input type="number" id="phone" value="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-field">
                                <label for="password-1">Change password</label>
                                <input type="password" name="password" id="password-1" />
                            </div>
                            <div class="form-field">
                                <label for="password-2">Repeat password</label>
                                <input type="password" name="password" id="password-2" />
                            </div>
                        </div>
                    </form>
                    <div class="upload-photo-box">
                        <div class="user-db-title">Avatar and Cover</div>
                        <div class="user-avatar"><img src={avatarUpload} alt="" /></div>
                        <div class="user-cover-image"><img src={profileCover1} alt="" /></div>
                        <div class="upload-notice">Images must be .png or .jpg format. Min size 100x100px (avatar) and
                            1920x320px (cover) </div>
                    </div>
                </div>

                <button class="btn btn-wide btn-dark">Save Changes</button>
            </div>

        </div>

        <Footer />

    </>
}

export default ProfileIntro;