import axios from "axios"

const  BASE_URL = "https://jer-django-real-estate.herokuapp.com/api/";

export const axiosReq = axios.create({
    baseURL:  BASE_URL
})