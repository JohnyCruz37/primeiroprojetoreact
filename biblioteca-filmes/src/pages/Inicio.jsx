import { useState, useEffect } from "react";
import CardFilme from "../componentes/cardFilme";

const filmeUrl = import.meta.env.VITE_API;
const chaveApi = import.meta.env.VITE_API_KEY;

import './filmes-Grid.css';

const Inicio = () => {
    const [topFilmes, setTopFilmes] = useState([])

    const pegarFilmes = async (url) => {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        setTopFilmes(dados.results);
    };

    useEffect(()=>{

        const topUrl = filmeUrl + 'top_rated?' + chaveApi;

        pegarFilmes(topUrl);

    }, [])

    return (
        <div className="container">
            <h2 className="titulo"> Veja os melhores filmes:</h2>
            <div className="filmes-container">
                {topFilmes.length === 0 && <p>Carregando...</p> }
                {topFilmes.length > 0 && topFilmes.map((filme) => <CardFilme key={filme.id} filme={filme} /> )}
            </div>
        </div>
    )
}

export default Inicio;