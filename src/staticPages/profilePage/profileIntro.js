import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import Sidebar from "../../components/common/sidebar/sidebar";
import { avatar, avatarUpload, profileCover1 } from "../../img";

const ProfileIntro = () => {
    return <>

        <Header />
        <SubHeader />

        <div class="primary-content-area container content-padding grid-left-sidebar">
           <Sidebar />
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