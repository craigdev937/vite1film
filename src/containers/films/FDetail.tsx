import React from "react";
import "./FDetail.css";
import { useParams } from "react-router-dom";
import { API } from "../../global/API";
import { FPortal } from "./FPortal";
const IMG = "https://image.tmdb.org/t/p/w500";

export const FDetail = () => {
    const { id } = useParams();
    const filmID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data: fDetail } = API.useMdetailQuery(filmID);
    const { data: vData } = API.useFvideoQuery(filmID);
    const DET = fDetail!;
    const VID = vData!;
    

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
                <section>
                    <h1>{DET.title}</h1>
                    <p>{DET.overview}</p>
                    <img 
                        alt={DET.title}
                        src={`${IMG}/${DET.backdrop_path}`}
                    />
                    {VID.results.map((video) => (
                        <FPortal key={video.id} video={video} />
                    ))}
                </section>
            )}
        </React.Fragment>
    );
};


