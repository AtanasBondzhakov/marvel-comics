import { useState } from "react";

export default function useFetch() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong, try again later')
            }

            const result = await response.json();

            setData(result.data.results);
        } catch (err) {
            setError(err);
            console.log(err);
        } finally {
            setLoading(false);
        }

        window.scrollTo({ top: 0, left: 0 });
    };

    return { data, loading, error, fetchData };
}