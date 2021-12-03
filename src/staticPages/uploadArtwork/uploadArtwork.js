import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import Sidebar from "../../components/common/sidebar/sidebar";

const UploadArtwork = () => {
    return <>

        <Header />
        <SubHeader />

        <div class="primary-content-area container content-padding grid-left-sidebar">
            <Sidebar />
            <div class="main-content-area">
                <div class="page-title">
                    <h2>
                        <span class="gradient-text">Upload</span> Artwork
                    </h2>
                </div>
                <div class="user-db-content-area">
                    <div class="artwork-upload-box">
                        <div class="user-db-title">Upload & Preview</div>
                        <div class="upload-container">
                            <div class="artwork-upload">
                                <div class="label">Upload File</div>
                                <div class="upload-box"><svg class="crumina-icon">
                                    <use xlinkHref="#upload-icon"></use>
                                </svg>
                                    <div class="upload-notice"> Max 120MB, PNG, JPEG, MP3, MP4</div>
                                    <button class="btn btn-normal btn-dark browse-btn">Browse File</button>
                                </div>
                            </div>
                            <div class="artwork-preview">
                                <div class="label">File Preview</div>
                                <div class="preview-box"></div>
                            </div>
                        </div>
                    </div>
                    <div class="purchase-type-box">
                        <div class="user-db-title">Purchase Type</div>
                        <div class="db-tabs-block">
                            <ul class="db-tabs-list">
                                <li class="active"><a href="">
                                    <div class="purchase-type-symbol"><svg class="crumina-icon">
                                        <use xlinkHref="#dollar-icon"></use>
                                    </svg></div>
                                    <div class="purchase-type-info">
                                        <div class="purchase-type-title">Fixed Price</div>
                                        <div class="purchase-type-description">Set a fixed price for people to buy
                                            your work instantly </div>
                                    </div>
                                </a></li>
                                <li><a href="">
                                    <div class="purchase-type-symbol"><svg class="crumina-icon">
                                        <use xlinkHref="#clock-icon"></use>
                                    </svg></div>
                                    <div class="purchase-type-info">
                                        <div class="purchase-type-title">Timed Auction</div>
                                        <div class="purchase-type-description">Set a fixed price for people to buy
                                            your work instantly </div>
                                    </div>
                                </a></li>
                                <li><a href="">
                                    <div class="purchase-type-symbol"><svg class="crumina-icon">
                                        <use xlinkHref="#annotation-icon"></use>
                                    </svg></div>
                                    <div class="purchase-type-info">
                                        <div class="purchase-type-title">Open for Bids</div>
                                        <div class="purchase-type-description">Set a fixed price for people to buy
                                            your work instantly </div>
                                    </div>
                                </a></li>
                            </ul>
                            <div id="tab-1" class="tab active">
                                <div class="tab-content">
                                    <form class="cryptoki-form" id="personal-info-form">
                                        <div class="form-title">Main Details</div>
                                        <div class="form-group">
                                            <div class="form-field">
                                                <label for="name">Artwork name</label>
                                                <input type="text" id="name" value="Breathing Nature" />
                                            </div>
                                            <div class="form-field">
                                                <label for="price">Price</label>
                                                <input type="number" id="price" value="3.21" />
                                            </div>
                                            <div class="form-field">
                                                <label>Select currency</label>
                                                <select class="select-nice" name="currency" >
                                                    <option value="ETH" selected>ETH</option>
                                                    <option value="USD">USD</option>
                                                    <option value="Euro">Euro</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-field comment-area">
                                            <label>Description</label>
                                            <textarea id="message" cols="30" rows="10" class=""
                                                spellcheck="false"></textarea>
                                        </div>
                                        <button class="btn btn-wide btn-dark">Create Item</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <Footer />

    </>
}

export default UploadArtwork;