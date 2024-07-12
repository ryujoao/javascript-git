const Banner = () => {
    const bannerStyle = {
        background: 'url("https://fastly.picsum.photos/id/583/1200/400.jpg?grayscale&hmac=SyUIryDnjB6_7YmckeXlYfrc7tbUnkszXmz47setw5o") no-repeat center center',
        backgroundSize: 'cover',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
    }

    return (
        <div style={bannerStyle}>
            <div className="">
                <h1 className="display-4">Bem-Vindo ao Meu Site</h1>
                <p className="lead">Lorem ipsum lorem </p>
            </div>
        </div>
    )
}

export default Banner;