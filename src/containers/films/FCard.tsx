import "./FCard.css";
import { Link } from "react-router-dom";
import { IMovie } from "../../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type FIL = {
    film: IMovie
};

export const FCard = ({film}: FIL) => {
    return (
        <section className="film__card">
            <Link to={`/film/${film.id}`}>
                <img 
                    className="film__img"
                    alt={film.title} 
                    src={`${IMG}/${film.poster_path}`} 
                />
                <h4>{film.title}</h4>
            </Link>
        </section>
    );
};


