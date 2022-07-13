import { Link } from "react-router-dom";
import { FaStar} from 'react-icons/fa'

const imagemUrl = import.meta.env.VITE_IMG;

const CardFilme = ({filme, mostrarLink = true}) => {
    return (
        <div className="card-filme">
            <img src={imagemUrl + filme.poster_path} alt={filme.title} />
            <h2> {filme.title} </h2>
            <p>
                <FaStar /> {filme.vote_average}
            </p>
            {mostrarLink && <Link to={'/filme/' + filme.id}>Detalhes</Link>}
        </div>
    )
}

export default CardFilme