import "./localizacao.css"

export const Localização = () => {
    return(
        <div className="loc">
            <div className="txtloc">
                <h1>A EXUBERANTE PRAIA DO CUPE</h1>
                <h2>LOCALIZADA NA REGIÃO DE PORTO DE GALINHAS, A PRAIA DO CUPE É UM VERDADEIRO PARAÍSO QUE COMBINA BELEZA NATURAL E INFRAESTRUTURA DE ALTO PADRÃO. </h2>
            </div>
            <div className="locenfeite" />
            <div className="locimg">
                <img src="/download.png" />
            </div>
            <div className="enfeitesloc">
                <img src="/coqueiro.png" className="coqueiro" />
                <img src="/barco.png" className="barco" />
            </div>
        </div>
    )
}