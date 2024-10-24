import { Link } from "react-router-dom"
import "./style.css"
import { Empreendimento } from "../empreendimentos"

export const Headder = () => {
    return (
        <div className="headder">
            <div className="hlogo">
                <img src="LOGO-MAKALOAflex.png" />
            </div>
            <div className="hlinks">
                <a>Empreendimento</a>
                <a>Apartamentos</a>
                <a>Localização</a>
                <a>Contato</a>
            </div>
        </div>
    )
}