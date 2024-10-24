import { Carrosel } from "../carousel"
import "./style.css"

export const Apartamentos = () => {
    const images = [
        '/download.png',
        '/download.png',
        '/download.png'
    ]

    return (
        <div id="apartamentos" className="apto">
            <div className="enfeiteftaapt" />
            <div className="txtapto">
                <h1>A AREIA SOB SEUS PES.</h1>
                <h2>ESTE PROJETO EXCLUSIVO DESENVOLVIDO PARA ATENDER AQUELES QUE NAO BUSCAM UM LAR, MAS UM ESTILO DE VIDA.</h2>
            </div>
            <div className="imgsaptos">
                <Carrosel
                    images={images}
                />
            </div>
            <div className="enfeites">
                <img src="/tortuguita.png" className="tort" />
                <img src="/planta.png" className="pranta" />
            </div>
        </div>
    )
}