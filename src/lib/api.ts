import axios from "axios";

export const api = axios.create({
    baseURL: 'https://hianime-api-seven.vercel.app/api/v2/hianime'
})
