import React from "react";
import ReactDOM from "react-dom";
import { IMVideo } from "../../models/Interfaces";
const YOU = "https://www.youtube.com/embed";

type VID = {
    video: IMVideo
};

export const FPortal = ({video}: VID) => {
    return ReactDOM.createPortal(
        <React.Fragment>
            <iframe src={`${YOU}/${video.key}`}></iframe>
        </React.Fragment>,
        document.getElementById("portal") as HTMLElement
    )
};



