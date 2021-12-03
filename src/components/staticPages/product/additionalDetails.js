const AdditionalDetails = () => {
    return <div class="product-description">
        <ul class="details-list">
            <li>
                <svg class="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span class="detail-label">Size</span>
                <span class="bold">5000 x 3500px (37MB)</span>
            </li>
            <li>
                <svg class="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span class="detail-label">Formats</span>
                <span class="bold">MP4, JPEG and PNG</span>
            </li>
            <li>
                <svg class="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span class="detail-label">Contract Address</span>
                <span class="bold">0xf7a6...f643</span>
            </li>
            <li>
                <svg class="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span class="detail-label">Token ID</span>
                <span class="bold">3584</span>
            </li>
            <li>
                <svg class="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span class="detail-label">Token Standard</span>
                <span class="bold">ERC-721</span>
            </li>
            <li>
                <svg class="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span class="detail-label">Blockchain</span>
                <span class="bold">Ethereum</span>
            </li>
        </ul>
    </div>
}

export default AdditionalDetails;