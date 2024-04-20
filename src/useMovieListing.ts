import {useState, useEffect} from "react";

export type FetchFunction = typeof fetch;

export interface Movie {  //Movie Interface
  "#IMDB_ID": string;
  "#TITLE": string;
  "#AKA": string;
  "#IMG_POSTER": string;
  "#ACTORS": string[];
  "#RANK": string[];
}

const MAX_MOVIES_DISPLAYED = 10; //As per the requirement given in the documentation for the task

export const useMovieListing = (
  fetch: FetchFunction,
  React: {useState: typeof useState, useEffect: typeof useEffect},
  maxMoviesDisplayed: number = MAX_MOVIES_DISPLAYED
) => {
  const { useState, useEffect } = React;
  const [error, setError] = useState("");

  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchMovies = async (searchQuery: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://search.imdbot.workers.dev/?q=${searchQuery}`
      );
      const responseJson = await response.json();
      setMovies(responseJson?.description);
      setError("");
    } catch (error) {
      setError("Error fetching movies. Please try again.");
      setMovies([]);
    } finally {
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
