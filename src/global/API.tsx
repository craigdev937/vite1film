import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieDetail, ITrendMovie, IMVideoData, 
    IPeopleData, ITVData } from "../models/Interfaces";
const KEY = import.meta.env.VITE_API_KEY;
const URL = "https://api.themoviedb.org/3";

export const API = createApi({
    reducerPath: "API",
    tagTypes: ["Film", "Show", "People"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        tmov: builder.query<ITrendMovie, void>({
            query: () => ({
                url: `/trending/movie/day?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["Film"]
        }),
        mdetail: builder.query<IMovieDetail, number>({
            query: (id: number) => ({
                url: `/movie/${id}?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["Film"]
        }),
        fvideo: builder.query<IMVideoData, number>({
            query: (id: number) => ({
                url: `/movie/${id}/videos?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["Film"]
        }),
        people: builder.query<IPeopleData, void>({
            query: () => ({
                url: `/person/popular?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["People"]
        }),
        tv: builder.query<ITVData, void>({
            query: () => ({
                url: `/tv/popular?api_key=${KEY}`,
                method: "GET"
            }),
            providesTags: ["Show"]
        }),
    })
});


