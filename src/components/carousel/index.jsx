import { useState } from "react"
import "./style.css"

export const Carrosel = ({ images }) => {
    const [atualimg, setAtualimg] = useState(0)

    const proximg = () => {
        setAtualimg((previmg) =>
            previmg === images.length - 1 ? 0 : previmg + 1
        );
    };

    const antimg = () => {
        setAtualimg((previmg) =>
            previmg === 0 ? images.length - 1 : previmg - 1
        );
    };

    return (
        <div className="carousel">
            <button className="carousel-button" onClick={antimg}>
                &#10094;
            </button>

            <div className="carousel-image">
                <img src={images[atualimg]} />
            </div>

            <button onClick={proximg} className="carousel-button">
                &#10095;
            </button>
        </div>
    )
}