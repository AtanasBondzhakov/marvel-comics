import md5 from "md5";

const BASE_URL = 'https://gateway.marvel.com:443/v1/public';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;

function generateHash(ts) {
    return md5(ts + privateKey + publicKey);
}

export function generateUrl(endpoint, params = {}) {
    const ts = new Date().getTime();
    const hash = generateHash(ts);

    const urlParams = new URLSearchParams({
        apikey: publicKey,
        hash,
        ts,
        ...params
    })

    return `${BASE_URL}/${endpoint}?${urlParams}`;
}