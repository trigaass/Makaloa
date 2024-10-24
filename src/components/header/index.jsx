import "./style.css"

export const Headder = () => {
    return (
        <div className="headder">
            <div className="hlogo">
                <img src="LOGO-MAKALOAflex.png" />
            </div>
            <div className="hlinks">
                <a href="#empreendimento">Empreendimento</a>
                <a href="#apartamentos">Apartamentos</a>
                <a href="#localizacao">Localização</a>
                <a>Contato</a>
            </div>
        </div>
    )
}