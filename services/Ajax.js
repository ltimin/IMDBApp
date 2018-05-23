import * as axios from 'axios';

//Getting AJAX Information
export function getActorByName(name) {
    const url = "https://theimdbapi.org/api/find/person?name=" + name
    return axios.get(url)
};
export function getMovieByName(title) {
    const url = "https://theimdbapi.org/api/find/movie?title=" + title
    return axios.get(url)
};
export function getActorById(id) {
    const url = "https://theimdbapi.org/api/find/person?person_id=" + id
    return axios.get(url)
};
export function getMovieById(id) {
    const url = "https://theimdbapi.org/api/find/movie?movie_id=" + id
    return axios.get(url)
};