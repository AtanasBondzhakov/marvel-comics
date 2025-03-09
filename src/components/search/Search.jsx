import { useState } from 'react';
import { useNavigate } from 'react-router';

import styles from './Search.module.css';

export default function Search() {
    const [characterName, setCharacterName] = useState('');

    const navigate = useNavigate();

    const searchCharactersHandler = (e) => {
        e.preventDefault();

        navigate(`/characters/${characterName}`)
    };

    const handleChange = (e) => {
        setCharacterName(e.target.value);
    };

    const handleReset = () => {
        setCharacterName('');
        navigate('/search')
    };

    return (
        <>
            <form
                className={styles.search}
                onSubmit={searchCharactersHandler}
            >
                <input
                    type="text"
                    name="search"
                    placeholder="Enter character name"
                    value={characterName}
                    onChange={handleChange}
                />
                <div className="buttons">
                    <button type="submit">Search for Character</button>
                    <button
                        type="reset"
                        className={styles.reset}
                        onClick={handleReset}
                    >Reset
                    </button>
                </div>
            </form>
        </>
    );
};