import { useEffect } from 'react';
import { useParams } from 'react-router';

import styles from './ComicBook.module.css';
import useFetch from '../../hooks/useFetch.js';
import { generateUrl } from '../../utils.js';

import Spinner from '../spinner/Spinner.jsx';
import ErrorMessage from '../error-message/ErrorMessage.jsx';

export default function ComicBook() {
    const {
        data,
        loading,
        error,
        fetchData
    } = useFetch();

    const { comicBookId } = useParams();

    const characters = data[0]?.characters.items.map(char => char.name);

    useEffect(() => {
        (async () => {
            await fetchData(generateUrl(`comics/${comicBookId}`, {}));
        })();
    }, [comicBookId]);

    return (
        <>
            {loading && <Spinner />}

            {!loading && error && <ErrorMessage message={error.message} />}

            {data.length !== 0 && (
                <div className={styles.container}>
                    <div className={styles.poster}>
                        <img src={`${data[0].thumbnail.path}.${data[0].thumbnail.extension}`} alt="image" />
                    </div>
                    <div className={styles.info}>
                        <h2>{data[0].title}</h2>
                        <p>Characters: {characters?.join(', ')}</p>
                        <p>Description: {data[0].description || 'No description yet'}</p>
                    </div>
                </div>
            )}
        </>
    );
};