import React from "react";
import { API } from "../../global/API";
import { FCard } from "./FCard";

export const Films = () => {
    const { error, isLoading, data } = API.useTmovQuery();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section className="film">
                    {data!.results.map((film) => (
                        <FCard 
                            key={film.id} film={film} 
                        />
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};


