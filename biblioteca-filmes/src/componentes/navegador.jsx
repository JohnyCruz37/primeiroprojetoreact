import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import './navegador.css';

const Navegador = () => {
    const [pesquisar, setPesquisar] = useState("")
    const navigate = useNavigate();

    const aplicarPesquisa = (e) => {
        e.preventDefault()
        
        if(!pesquisar) return
        navigate('/pesquisar?q=' + pesquisar)
        setPesquisar('');
    }

    return (
        <nav id='navbar'>
        <h2>
            <Link to='/'> 
                <BiCameraMovie /> Biblioteca de filmes
            </Link>
        </h2>
        <form onSubmit={aplicarPesquisa}>
            <input type="text" placeholder="Busque um filme" onChange={(e) => setPesquisar(e.target.value)} value={pesquisar}/>
            <button type="submit"> <BiSearchAlt2 /> </button>
        </form>
      </nav>
    );
};

export default Navegador;