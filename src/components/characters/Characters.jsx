import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import styles from './Characters.module.css';
import { generateUrl } from '../../utils.js';
import useFetch from '../../hooks/useFetch.js';

import Spinner from '../spinner/Spinner.jsx';
import Resource from '../resource/Resource.jsx';
import ErrorMessage from '../error-message/ErrorMessage.jsx';

export default function Characters() {
    const {
        data,
        loading,
        error,
        fetchData
    } = useFetch();

    const { charName } = useParams();
    const navigate = useNavigate();

    //TODO error handling

    useEffect(() => {
        (async () => {
            await fetchData(generateUrl(
                'characters',
                { nameStartsWith: charName, limit: 100 }
            ));
        })();
    }, [charName]);

    const handleSearchComics = (characterId) => {
        navigate(`/comics/${characterId}`);
    }

    return (
        <>
            {loading && <Spinner />}

            {!loading && error && <ErrorMessage message={error.message} />}

            {data.length !== 0 && (
                <div className={styles.characters}>
                    {data.map(character => (
                        <Resource
                            key={character.id}
                            {...character}
                            onClick={handleSearchComics}
                        />
                    ))}
                </div>
            )}

            {(!loading && !error && data.length === 0) && (
                <div className={styles.message}>
                    <h3>There is no matching characters</h3>
                </div>
            )}
        </>
    );
};