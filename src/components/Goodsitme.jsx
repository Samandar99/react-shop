function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets: [{ full_background }],
        price: { regularPrice },
        addToBasket = Function.prototype,

    } = props;

    return <div className="card" id={mainId}>
        <div className="card-image">
            <img src={full_background} alt={displayName} />

        </div>
        <div className="card-content">
            <span className="card-title">{displayName}</span>
            <p>{displayDescription}</p>
        </div>
        <div className="card-action">
            <button className="btn" onClick={() => addToBasket({
                mainId,
                displayName,
                regularPrice
                
            })}>Купить</button>
            <span className="right" style={{ fontSize: '1.8rem' }}>
                {regularPrice} руб</span>
        </div>

    </div>
}


export { GoodsItem };



