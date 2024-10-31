import "./SCard.css";
import { Link } from "react-router-dom";
import { ITV } from "../../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type SHO = {
    show: ITV
};

export const SCard = ({ show }: SHO) => {
    return (
        <section className="show__card">
            <Link to={`/show/${show.id}`}>
                <img 
                    className="show__img"
                    alt={show.name}
                    src={`${IMG}/${show.poster_path}`}
                />
                <h1>{show.name}</h1>
            </Link>
        </section>
    );
};


