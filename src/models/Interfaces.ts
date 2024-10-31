export interface IMovie {
    backdrop_path: string,
    id: number,
    title: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    adult: boolean,
    original_language: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    video: false,
    vote_average: number,
    vote_count: number
};

export interface ITrendMovie {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
};

export interface IMovieDetail {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: {
        id: number,
        name: string,
        poster_path: string,
        backdrop_path: string,
    },
    budget: number,
    genres: [{
        id: number,
        name: string
    }],
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [{
        id: number,
        logo_path: string,
        name: string,
        origin_country: string
    }],
    production_countries: [{
        iso_3166_1: string,
        name: string
    }],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: [{
        english_name: string,
        iso_639_1: string,
        name: string
    }],
    status: string,
    tagline: string,
    title: string,
    vote_average: number,
    vote_count: number
};

export interface IMVideo {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: true,
    published_at: string,
    id: string
};

export interface IMVideoData {
    id: number,
    results: IMVideo[]
};

export interface IPeople {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    known_form: [{
        backdrop_path: string,
        id: number,
        title: string,
        original_title: string,
        overview: string,
        poster_path: string,
        media_type: string,
        adult: boolean,
        original_language: string,
        genre_ids: number[],
        popularity: number,
        release_date: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }]
};

export interface IPeopleData {
    page: number,
    results: IPeople[],
    total_pages: number,
    total_results: number
};

export interface ITV {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    first_air_date: string,
    name: string,
    vote_average: number,
    vote_count: number
};

export interface ITVData {
    page: number,
    results: ITV[],
    total_pages: number,
    total_results: number
};



