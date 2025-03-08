import { useEffect } from 'react';
import { useParams } from 'react-router';

import styles from './Characters.module.css';
import { generateUrl } from '../../utils.js';
import useFetch from '../../hooks/useFetch.js';

import Spinner from '../spinner/Spinner.jsx';

export default function Characters() {
    const {
        data,
        loading,
        error,
        fetchData
    } = useFetch();

    const { charName } = useParams();

    //TODO error handling

    useEffect(() => {
        (async () => {
            await fetchData(generateUrl(
                'characters',
                { nameStartsWith: charName, limit: 100 }
            ));
        })();
    }, []);

    return (
        <>
            {loading && <Spinner />}

            {data.length !== 0 && (
                <div className={styles.characters}>
                    {data.map(char => {
                        return (
                            <div
                                key={char.id}
                                className={styles.characterCard}
                                style={{
                                    background: `url(${char.thumbnail.path}.${char.thumbnail.extension})`,
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className={styles.caption}>{char.name}</div>
                                <div className={styles.captionBottom}>View Comics</div>
                            </div>
                        )
                    })}
                </div>
            )}

            {(!loading && data.length === 0) && (
                <div className={styles.message}>
                    <h3>There is no matching characters</h3>
                </div>
            )}
        </>
    );
};