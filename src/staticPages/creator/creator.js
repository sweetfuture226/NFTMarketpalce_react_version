import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import CreatorCard from "../../components/staticPages/cards/creatorCard";

const Creator = () => {
    return <>
        <Header />
        <SubHeader />

        <div class="primary-content-area container content-padding">
            <div class="page-title-section">
                <h2>Explore<span class="gradient-text"> Creators</span></h2>
            </div>
            <div class="filterable-bar">
                <form id="creators-filter-form">
                    <div class="filter-options">
                        <select class="select-nice">
                            <option value="order-by-name">Order by Name (A-Z)</option>
                            <option value="order-by-last-modification" selected>Order by Last Modification</option>
                            <option value="order-by-registration-date">Order by Registration Date</option>
                        </select>
                        <select class="select-nice">
                            <option value="verified-creators-only" selected>Verified Creators Only</option>
                            <option value="all-creators">All Creators</option>
                        </select>

                        <select class="select-nice">
                            <option value="creators-with-active-auctions" selected>Creators with Active Auctions</option>
                            <option value="all-creators">All Creators</option>
                        </select>
                    </div>
                    <div class="filter-button">
                        <button class="btn btn-normal btn-dark">Filter</button>
                    </div>
                </form>
            </div>

            <div class="creators-box grid-4-columns">
                {Array.from(Array(12)).map((x, i) => {
                    return <CreatorCard />
                })}
            </div>

            <div class="pagination-section flex-center">
                <ul class="pagination-list">
                    <li class="page-item page-nav-prev"><a href="#">Prev</a></li>
                    <li class="page-item"><a href="#">01</a></li>
                    <li class="page-item"><a href="#">02</a></li>
                    <li class="page-item"><a href="#">03</a></li>
                    <li class="page-item page-more-link"><a href="#">...</a></li>
                    <li class="page-item"><a href="#">16</a></li>
                    <li class="page-item page-nav-next"><a href="#">Next</a></li>
                </ul>
            </div>
        </div>
        <Footer />
    </>
}

export default Creator;