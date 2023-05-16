import axios from "axios";

const env = process.env.NODE_ENV === "production"

export const MyApi = axios.create({
    baseURL: env ? process.env.REACT_APP_BASE_URL : "http://localhost:3001"
})