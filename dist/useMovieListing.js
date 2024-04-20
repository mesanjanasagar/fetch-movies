"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMovieListing = void 0;
const MAX_MOVIES_DISPLAYED = 10; //As per the requirement given in the documentation for the task
const useMovieListing = (fetch, React, maxMoviesDisplayed = MAX_MOVIES_DISPLAYED) => {
    const { useState, useEffect } = React;
    const [error, setError] = useState("");
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);
    const fetchMovies = async (searchQuery) => {
        setLoading(true);
        try {
            const response = await fetch(`https://search.imdbot.workers.dev/?q=${searchQuery}`);
            const responseJson = await response.json();
            setMovies(responseJson?.description);
            setError("");
        }
        catch (error) {
            setError("Error fetching movies. Please try again.");
            setMovies([]);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchMovies("");
    }, []);
    const searchMovies = () => {
        fetchMovies(searchText);
    };
    return {
        searchText,
        setSearchText,
        searchMovies,
        loading,
        error,
        movies,
        maxMoviesDisplayed,
    };
};
exports.useMovieListing = useMovieListing;
//# sourceMappingURL=useMovieListing.js.map