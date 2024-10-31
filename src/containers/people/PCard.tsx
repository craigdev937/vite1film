import "./PCard.css";
import { Link } from "react-router-dom";
import { IPeople } from "../../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type PEO = {
    people: IPeople
};

export const PCard = ({people}: PEO) => {
    return (
        <section className="people__card">
            <Link to={`/people/${people.id}`}>
                <img
                    className="people__img"
                    alt={people.name}  
                    src={`${IMG}/${people.profile_path}`} 
                />
                <h1>{people.name}</h1>
            </Link>
        </section>
    );
};


