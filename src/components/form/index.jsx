import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
    /*
    const navigate = useNavigate();
    */
    const [nome, setNome] = useState("");
    const [fone, setFone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        navigate("/book");
        */
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        id="nome"
                        type="text"
                        placeholder="nome"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        id="fone"
                        type="tel"
                        placeholder="(00)00000-0000"
                        required
                        value={fone}
                        onChange={(e) => setFone(e.target.value)}
                        maxLength={16}
                    />
                    <input
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};
