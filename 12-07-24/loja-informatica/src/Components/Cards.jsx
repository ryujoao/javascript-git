const Cards = () => {
    const cardData = [
        {
            title: "Ocean",
            subTitle: "World",
            text: "Esta é uma imagem de um oceano",
            img: "https://fastly.picsum.photos/id/241/300/200.jpg?hmac=-jznbPhyDXx2-0fiQHoW1taQLbXH3h_RsUtqy7fyVIY"
        },
        {
            title: "Lantern",
            subTitle: "Japan",
            text: "Essa é uma imagem de uma lanterna",
            img: "https://fastly.picsum.photos/id/460/300/200.jpg?hmac=BnPkmWAxs-vklFl1lq0xhDAESNUZzynRHPtgbhU4vl0"
        },
        {
            title: "Forest",
            subTitle: "USA",
            text: "Esta é uma imagem de uma floresta",
            img: "https://fastly.picsum.photos/id/243/300/200.jpg?hmac=bEhz6QYMJpOC0vcqNyivFRDuJz27fEqlgbmVUypZO9A"
        }
    ];


    return (
        <div className="row">
            {cardData.map((card, index) => (
                <>
                    <section key={index} className="col-md-4">
                        <article className="card">
                            <div className="card-body">
                                <img src={card.img} alt={card.title} className="card-img-top" />
                                <h5 className="card-title">{card.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{card.subTitle}</h6>
                                <p className="card-text">
                                    {card.text}
                                </p>
                            </div>
                        </article>
                    </section>
                </>

            ))}





        </div>
    )
}

export default Cards;