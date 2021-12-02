import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import { walletIcon1, walletIcon2, walletIcon3, walletIcon4 } from "../../img";

const ConnectWallet = () => {
    return <>
        <Header />
        <SubHeader />

        <div class="primary-content-area container content-padding">
            <div class="wallet-wrapper section-small">
                <div class="section-title text-center"><span class="gradient-text">Connect</span> your Wallet</div>
                <div class="wallet-grid">
                    <div class="wallet-item orange-gradient">
                        <div class="wallet-icon"><img src={walletIcon1} alt="" /></div>
                        <div class="wallet-info">
                            <div class="title h5">Metamask</div>
                            <div class="description">Learn about how to get the wallet and much more clicking <a
                                href="#">here</a></div>
                        </div>
                    </div>
                    <div class="wallet-item turquoise-gradient">
                        <div class="wallet-icon"><img src={walletIcon2} alt="" /></div>
                        <div class="wallet-info">
                            <div class="title h5">WalletConnect</div>
                            <div class="description">Learn about how to get the wallet and much more clicking <a
                                href="#">here</a></div>
                        </div>
                    </div>
                    <div class="wallet-item purple-gradient">
                        <div class="wallet-icon"><img src={walletIcon3} alt="" /></div>
                        <div class="wallet-info">
                            <div class="title h5">Fortmatic</div>
                            <div class="description">Learn about how to get the wallet and much more clicking <a
                                href="#">here</a></div>
                        </div>
                    </div>
                    <div class="wallet-item green-gradient">
                        <div class="wallet-icon"><img src={walletIcon4} alt="" /></div>
                        <div class="wallet-info">
                            <div class="title h5">Portis</div>
                            <div class="description">Learn about how to get the wallet and much more clicking <a
                                href="#">here</a></div>
                        </div>
                    </div>
                </div>
                <div class="notification-text text-center">
                    New to wallets? <a href="/faq">Learn how to make a wallet</a> in our FAQs page<br /> and check
                    other helpful guides to get started!
                </div>
            </div>

        </div>

        <Footer />
    </>
}

export default ConnectWallet;