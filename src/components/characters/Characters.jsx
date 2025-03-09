import { useEffect } from 'react';
import { useParams } from 'react-router';

import styles from './Characters.module.css';
import { generateUrl } from '../../utils.js';
import useFetch from '../../hooks/useFetch.js';

import Spinner from '../spinner/Spinner.jsx';
import Character from './character/Character.jsx';

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
    }, [charName]);

    return (
        <>
            {loading && <Spinner />}

            {data.length !== 0 && (
                <div className={styles.characters}>
                    {data.map(character => <Character key={character.id} {...character} />)}
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