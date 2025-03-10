import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import styles from './Comics.module.css';
import useFetch from '../../hooks/useFetch.js';
import { generateUrl } from '../../utils.js';

import Spinner from '../spinner/Spinner.jsx';
import Resource from '../resource/Resource.jsx';
import ErrorMessage from '../error-message/ErrorMessage.jsx';

export default function Comics() {
    const {
        data,
        loading,
        error,
        fetchData
    } = useFetch();

    const { characterId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await fetchData(generateUrl(`characters/${characterId}/comics`));
        })();
    }, [characterId]);

    const handleSearchComicBook = (comicBookId) => {
        navigate(`/character/comics/${comicBookId}`);
    }

    return (
        <>
            {loading && <Spinner />}

            {!loading && error && <ErrorMessage message={error.message} />}

            {data.length !== 0 && (
                <div className={styles.comics}>
                    {data.map(comicBook => (
                        <Resource
                            key={comicBook.id}
                            title={comicBook.name}
                            {...comicBook}
                            onClick={handleSearchComicBook}
                        />
                    ))}
                </div>
            )}

            {(!loading && !error && data.length === 0) && (
                <div className={styles.message}>
                    <h3>This character doesn't have any comics</h3>
                </div>
            )}
        </>
    );
};