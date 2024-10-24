import { Carrosel } from "../carousel/"
import "./style.css"

export const Empreendimento = () => {
    const images = [
        '/BICICLETARIO.jpeg',
        '/ACADEMIA.jpeg',
        '/CONVENIENCIA.jpeg'
    ]

    return (
        <div className="empreendimeto">
            <div className="enfeiteftemp" />
            <div className="empreendimentoimgs">
                <Carrosel
                    images={images}
                />
            </div>
            <div className="txtemp">
                <h1>O SEU REFÚGIO DE LAZER.</h1>
                <h2>ÁREAS EXCLUSIVAS COM O MELHOR EM CONFORTO E VISTA PRIVILEGIADA DO MAR.</h2>
            </div>
            <div className="formas">
                <img src="/palha.png" className="palha" />
                <img src="/ondas.png" className="onda"/>
                <img src="/estrela.png" className="estrela" />
            </div>
        </div>
    )
}