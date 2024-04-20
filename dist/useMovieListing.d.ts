import { useState, useEffect } from "react";
export type FetchFunction = typeof fetch;
export interface Movie {
    "#IMDB_ID": string;
    "#TITLE": string;
    "#AKA": string;
    "#IMG_POSTER": string;
    "#ACTORS": string[];
    "#RANK": string[];
}
export declare const useMovieListing: (fetch: FetchFunction, React: {
    useState: typeof useState;
    useEffect: typeof useEffect;
}, maxMoviesDisplayed?: number) => {
    searchText: string;
    setSearchText: import("react").Dispatch<import("react").SetStateAction<string>>;
    searchMovies: () => void;
    loading: boolean;
    error: string;
    movies: Movie[];
    maxMoviesDisplayed: number;
};
//# sourceMappingURL=useMovieListing.d.ts.map