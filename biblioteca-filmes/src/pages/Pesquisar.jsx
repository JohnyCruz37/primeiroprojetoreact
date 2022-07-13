import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardFilme from '../componentes/cardFilme';

const pesquisarUrl = import.meta.env.VITE_SEARCH;
const chaveApi = import.meta.env.VITE_API_KEY;

import './filmes-Grid.css';


const Pesquisar = () => {
    const [pesquisarParamentros] = useSearchParams();
    const [filmes, setFilmes] = useState([]);
    const query = pesquisarParamentros.get('q');

    const pesquisarFilmes = async (url) => {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        setFilmes(dados.results);
    };

    useEffect(()=>{

        const pesquisarTextoUrl = pesquisarUrl + '?'+ chaveApi + '&query=' + query;

        pesquisarFilmes(pesquisarTextoUrl);

    }, [query])

    return (
        <div className="container">
            <h2 className="titulo"> Resultados para: <span className="texto-pesquisado"> {query} </span> </h2>
            <div className="filmes-container">
                {filmes.length === 0 && <p>Carregando...</p> }
                {filmes.length > 0 && filmes.map((filme) => <CardFilme key={filme.id} filme={filme} /> )}
            </div>
        </div>
    )
}

export default Pesquisar;