import { useEffect } from 'react';
import { useParams } from 'react-router';

import styles from './Comics.module.css';
import useFetch from '../../hooks/useFetch.js';
import { generateUrl } from '../../utils.js';
import Spinner from '../spinner/Spinner.jsx';
import ComicsItem from './comics-item/ComicsItem.jsx';

export default function Comics() {
    const {
        data,
        loading,
        error,
        fetchData
    } = useFetch();

    const { characterId } = useParams();

    useEffect(() => {
        (async () => {
            fetchData(generateUrl(`characters/${characterId}/comics`));
        })();
    }, [characterId]);


    return (
        <>
            {loading && <Spinner />}

            {data.length !== 0 && (
                <div className={styles.comics}>
                    {data.map(comicBook => <ComicsItem key={comicBook.id} {...comicBook} />)}
                </div>
            )}

            {(!loading && data.length === 0) && (
                <div className={styles.message}>
                    <h3>This character doesn't have any comics</h3>
                </div>
            )}
        </>
    );
};