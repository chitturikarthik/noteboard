import axios from "axios"

//in production, there'll no localhost. So we have to make the base_url dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";
const api = axios.create({
    baseURL : BASE_URL,
});

export default api;