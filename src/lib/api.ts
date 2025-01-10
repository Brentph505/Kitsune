import axios from "axios";

export const api = axios.create({
    baseURL: 'https://corsproxy.io/?url=https://aniwatch-api-amber.vercel.app/api/v2/hianime'
})
