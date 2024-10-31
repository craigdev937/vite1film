import React from "react";
import { API } from "../../global/API";
import { SCard } from "./SCard";

export const Shows = () => {
    const { error, isLoading, data } = API.useTvQuery();

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
            <section className="show">
                {data!.results.map((show) => (
                    <SCard key={show.id} show={show} />
                ))}
            </section>
           )}
        </React.Fragment>
    );
};


