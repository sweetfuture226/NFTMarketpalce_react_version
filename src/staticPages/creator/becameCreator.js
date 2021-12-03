import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import { becameCreator } from "../../img";

const BecameCreator = () => {
    return (
        <>

            <Header />
            <SubHeader />

            <div>
                <div class="become-creator-bc-box container-1300 section-padding-medium">
                    <div class="bc-info">
                        <div class="bc-heading">
                            <div class="bc-heading-subtitle">JOIN OUR COMMUNITY!</div>
                            <div class="bc-heading-title">Become a <span class="gradient-text">Creator</span>
                            </div>
                        </div>
                        <div class="bc-description">Join thousands of other creators and start earning with your art,
                            artworks, videos or art creations! The process takes only a few seconds, just fill the form and
                            we’ll contact you</div>
                        <div class="bc-button"><a class="btn btn-wide btn-dark" href="#application-form">Fill the Form</a>
                        </div>
                    </div>
                    <div class="bc-image"><img src={becameCreator} alt="" /></div>
                </div>
                <div class="container-1300 section-padding-medium">
                    <div class="info-box">
                        <div class="info-item">
                            <div class="title h6">Valorize your Artwork</div>
                            <div class="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div class="info-item">
                            <div class="title h6">Reach Thousands</div>
                            <div class="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div class="info-item">
                            <div class="title h6">Top Royalties</div>
                            <div class="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div class="info-item">
                            <div class="title h6">Crypto Earnings</div>
                            <div class="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div class="info-item">
                            <div class="title h6">Creative Liberty</div>
                            <div class="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                        <div class="info-item">
                            <div class="title h6">Support other Artists!</div>
                            <div class="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim . </div>
                        </div>
                    </div>
                </div>
                <div id="application-form" class="submit-artwork-section extra-small-section section-padding-medium">
                    <div class="section-title text-center">Creator <span class="gradient-text">Form</span></div>
                    <form class="cryptoki-form">
                        <div class="form-field">
                            <label for="name">Full name</label>
                            <input type="text" id="name" />
                        </div>
                        <div class="form-field">
                            <label for="email">Your email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div class="form-field">
                            <label for="url">Portfolio link</label>
                            <input type="url" name="url" id="url" />
                        </div>
                        <div class="form-field file-upload">
                            <div class="label">Artwork sample</div>
                            <div class="file-uploader">
                                <svg class="crumina-icon">
                                    <use xlinkHref="#upload-icon"></use>
                                </svg>
                                <div class="upload-notice"> Max 120MB, PNG, JPEG, MP3, MP4</div>
                                <label class="btn btn-normal btn-dark" for="upload-media">Browse File</label>
                                <input type="file" name="upload-media" id="upload-media" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-normal btn-fullwidth btn-dark">Submit for Approval</button>
                        <div class="register-notice">
                            If approved, you’ll receive a confirmation email in your inbox within 2-5 bussiness days.
                        </div>
                    </form>
                </div>

            </div>


            <Footer />

        </>
    )
}

export default BecameCreator;