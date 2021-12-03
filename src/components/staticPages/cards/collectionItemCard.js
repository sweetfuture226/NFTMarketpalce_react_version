const CollectionItemCard = ({ img, itemName, itemCounts }) => {
    return <div class="collection-item">
        <a href="/explore">
            <div class="cover-image"><img src={img} alt="" />
            </div>
            <div class="collection-info">
                <div class="title h3">{itemName}</div>
                <div class="number">{itemCounts} items</div>
            </div>
        </a>
    </div>
}

export default CollectionItemCard;