import { useEffect } from "react";
import { useNavigate } from "react-router";

import styles from './Home.module.css';
import useFetch from "../../hooks/useFetch.js";
import { generateUrl } from "../../utils.js";

import Spinner from "../spinner/Spinner.jsx";
import Resource from "../resource/Resource.jsx";
import ErrorMessage from "../error-message/ErrorMessage.jsx";

export default function Home() {
    const {
        data,
        loading,
        error,
        fetchData
    } = useFetch();

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            fetchData(generateUrl('/characters', {
                orderBy: '-modified',
                limit: 15
            }));
        })();
    }, []);

    const handleSearchComics = (characterId) => {
        navigate(`/comics/${characterId}`);
    }

    return (
        <>
            {loading && <Spinner />}

            {!loading && error && <ErrorMessage message={error.message} />}

            {data.length > 0 && (
                <>
                    <div className={styles.message}>
                        <h3>Recently updated characters</h3>
                    </div>

                    <div className={styles.characters}>
                        {data.map(character => (
                            <Resource
                                key={character.id}
                                {...character}
                                onClick={handleSearchComics}
                            />
                        ))}
                    </div>
                </>
            )}

            {(!loading && !error && data.length === 0) && (
                <div className={styles.message}>
                    <h3>There is no any characters</h3>
                </div>
            )}
        </>
    );
};