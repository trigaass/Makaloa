import "./style.css"

export const Banner = () => {
    return (
        <div className="banner">
            <div className="bannerimg">
                <img src="/FACHADAPRAIAcut2.png" />
            </div>
            <div className="wpplink">
                <a href="https://wa.me/558133145030?text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Vila%20Porto!" >
                    <img src="whatsapp.svg" />
                </a>
            </div>
            <div className="txt">
                <h1>
                    PORTO DE GALINHAS
                    <br />
                    O LITORAL QUE VOCE SEMPRE QUIS, AGORA AO SEU ALCANCE.
                </h1>
            </div>
            <div className="ondas">
                <img src="/ondas.png" />
            </div>
        </div>
    )
}