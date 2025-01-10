import axios from "axios";

export const api = axios.create({
    baseURL: 'https://corsproxy.io/?url=https://api.kitsunee.me/v2/hianime'
})
