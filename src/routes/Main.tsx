import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Films } from "../containers/films/Films";
import { FDetail } from "../containers/films/FDetail";
import { Shows } from "../containers/shows/Shows";
import { People } from "../containers/people/People";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/film",
                element: <Films />
            },
            {
                path: "/film/:id",
                element: <FDetail />
            },
            {
                path: "/shows",
                element: <Shows />
            },
            {
                path: "/people",
                element: <People />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


